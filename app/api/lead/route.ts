import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  truckType?: string;
  authorityAge?: string;
  message?: string;
  company_website?: string; // honeypot
};

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL || site.email;
const LEAD_FROM = process.env.LEAD_FROM || `Elite Truck Dispatch <${SMTP_USER || site.email}>`;
const SHEET_WEBHOOK_URL = process.env.SHEET_WEBHOOK_URL; // optional Google Apps Script web-app

function esc(s = "") {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
}

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — pretend success so bots don't retry.
  if (body.company_website) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
  }

  const lead = {
    name,
    email,
    phone,
    truckType: (body.truckType || "").trim(),
    authorityAge: (body.authorityAge || "").trim(),
    message: (body.message || "").trim(),
    at: new Date().toISOString(),
  };

  const results: Record<string, string> = {};

  // 1) Email via SMTP (nodemailer)
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        connectionTimeout: 15000,
        greetingTimeout: 15000,
      });
      await transporter.sendMail({
        from: LEAD_FROM,
        to: LEAD_TO_EMAIL,
        replyTo: `${name} <${email}>`,
        subject: `New Dispatch Lead — ${name} (${lead.truckType || "truck"})`,
        text:
          `New lead from ${site.name}\n\n` +
          `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n` +
          `Truck type: ${lead.truckType}\nAuthority age: ${lead.authorityAge}\n` +
          `Message: ${lead.message}\nReceived: ${lead.at}\n`,
        html: `
          <h2>New lead from ${site.name}</h2>
          <table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
            <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
            <tr><td><b>Phone</b></td><td>${esc(phone)}</td></tr>
            <tr><td><b>Email</b></td><td>${esc(email)}</td></tr>
            <tr><td><b>Truck type</b></td><td>${esc(lead.truckType)}</td></tr>
            <tr><td><b>Authority age</b></td><td>${esc(lead.authorityAge)}</td></tr>
            <tr><td><b>Message</b></td><td>${esc(lead.message)}</td></tr>
            <tr><td><b>Received</b></td><td>${lead.at}</td></tr>
          </table>`,
      });
      results.email = "sent";
    } catch (e) {
      results.email = `error: ${e instanceof Error ? e.message : "unknown"}`;
    }
  } else {
    results.email = "skipped (SMTP not configured)";
  }

  // 2) Optional: append to a Google Sheet via Apps Script webhook
  if (SHEET_WEBHOOK_URL) {
    try {
      await fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      results.sheet = "appended";
    } catch (e) {
      results.sheet = `error: ${e instanceof Error ? e.message : "unknown"}`;
    }
  }

  if (!SMTP_HOST) console.log("[lead] (SMTP not configured)", lead);

  // If email delivery was attempted and errored, surface a soft failure to the client.
  if (results.email && results.email.startsWith("error")) {
    return NextResponse.json(
      { error: "We couldn't send your request right now — please call or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, results });
}
