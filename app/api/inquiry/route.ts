import { NextResponse } from "next/server";
import { company } from "@/data/site";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  country?: string;
  product?: string;
  message?: string;
  website?: string;
};

type InquiryEmail = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  product: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s().-]{7,20}$/;

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true, message: "Thank you. Our sales team will contact you soon." });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, message: "Name, email and phone are required." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, message: "Invalid email address." }, { status: 400 });
  }

  if (!phonePattern.test(phone)) {
    return NextResponse.json({ ok: false, message: "Invalid phone number." }, { status: 400 });
  }

  const inquiry = {
    name,
    email,
    phone,
    companyName: clean(payload.companyName),
    country: clean(payload.country),
    product: clean(payload.product),
    message: clean(payload.message)
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL || company.email;
  const fromEmail = getInquiryFromEmail(process.env.INQUIRY_FROM_EMAIL);

  if (!resendApiKey) {
    console.error("Inquiry email is not configured: missing RESEND_API_KEY.", {
      toEmail,
      inquiry
    });

    return NextResponse.json(
      {
        ok: false,
        message:
          "Inquiry email service is not configured. Please contact us by email or WhatsApp."
      },
      { status: 503 }
    );
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: inquiry.email,
      subject: `New B2B Inquiry from ${inquiry.name}`,
      text: buildTextEmail(inquiry),
      html: buildHtmlEmail(inquiry)
    })
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text().catch(() => "");
    console.error("Inquiry email service failed.", {
      status: emailResponse.status,
      toEmail,
      errorText
    });

    return NextResponse.json(
      { ok: false, message: "Email service failed. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, message: "Thank you. Our sales team will contact you soon." });
}

function clean(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

function getInquiryFromEmail(value?: string) {
  const configuredFrom = clean(value);

  if (configuredFrom.includes("@")) {
    return configuredFrom;
  }

  return "EVE Toner <inquiry@evecolor.net>";
}

function buildTextEmail(inquiry: InquiryEmail) {
  return [
    "New B2B Inquiry",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Company: ${inquiry.companyName || "-"}`,
    `Country / Region: ${inquiry.country || "-"}`,
    `Product Requirement: ${inquiry.product || "-"}`,
    "",
    "Message:",
    inquiry.message || "-"
  ].join("\n");
}

function buildHtmlEmail(inquiry: InquiryEmail) {
  const rows = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone],
    ["Company", inquiry.companyName || "-"],
    ["Country / Region", inquiry.country || "-"],
    ["Product Requirement", inquiry.product || "-"],
    ["Message", inquiry.message || "-"]
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6">
      <h2 style="margin:0 0 16px;color:#0788b8">New B2B Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #d8e3ea;padding:10px 12px;font-weight:700;background:#f7fafc;width:180px">${escapeHtml(label)}</td>
                <td style="border:1px solid #d8e3ea;padding:10px 12px">${escapeHtml(value)}</td>
              </tr>`
          )
          .join("")}
      </table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
