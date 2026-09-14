import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../lib/analytics.ts", import.meta.url), "utf8");
const code = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText;

function load(browser = true) {
  const calls = [];
  const context = {
    exports: {},
    // A stale deployment environment must not merge clicks with the lead action.
    process: { env: { NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL: "legacy", NEXT_PUBLIC_GOOGLE_ADS_INQUIRY_SUBMIT_LABEL: "legacy" } },
    ...(browser ? { window: { dataLayer: [], gtag: (...args) => calls.push(args) } } : {})
  };
  vm.runInNewContext(code, context);
  return { track: context.exports.trackConversion, calls };
}

test("contact and navigation clicks remain observable without recording a lead", () => {
  const { track, calls } = load();
  for (const event of ["whatsapp_click", "email_click", "phone_click", "facebook_click", "inquiry_click"]) {
    track(event);
    assert.ok(calls.some((call) => call[1] === event));
  }
  assert.equal(calls.filter((call) => call[1] === "conversion").length, 0);
  assert.equal(calls.filter((call) => call[1] === "generate_lead").length, 0);
});

test("successful inquiry emits exactly one dedicated Ads lead and one GA4 lead", () => {
  const { track, calls } = load();
  track("inquiry_submit_success", { country: "Kenya" });
  const conversions = calls.filter((call) => call[1] === "conversion");
  assert.equal(conversions.length, 1);
  assert.equal(conversions[0][2].send_to, "AW-18285989362/91ggCKyUj_ccEPKbuI9E");
  assert.equal(calls.filter((call) => call[1] === "generate_lead").length, 1);
  assert.equal(conversions[0][2].value, undefined);
});

test("server rendering safely skips browser analytics", () => {
  const { track, calls } = load(false);
  assert.doesNotThrow(() => track("inquiry_submit_success"));
  assert.equal(calls.length, 0);
});
