const endpoint = "https://api.indexnow.org/indexnow";
const host = "www.evetoner.net.cn";
const key = "388a8bfc05ef44eea6218a57fbae6700";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/about`,
  `https://${host}/factory-tour`,
  `https://${host}/quality-control`,
  `https://${host}/products`,
  `https://${host}/blog`,
  `https://${host}/blog/inside-eve-toner-copier-consumables-supply-base`,
  `https://${host}/blog/eve-toner-quality-control-process-for-b2b-orders`,
  `https://${host}/blog/oem-packaging-support-for-copier-toner-distributors`,
  `https://${host}/blog/how-to-verify-a-china-copier-consumables-supplier-online`,
  `https://${host}/sitemap.xml`
];

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList
  })
});

console.log(`IndexNow status: ${response.status} ${response.statusText}`);
const body = await response.text();
if (body) {
  console.log(body);
}

if (!response.ok && response.status !== 202) {
  process.exitCode = 1;
}
