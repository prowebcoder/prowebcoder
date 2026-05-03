// app/api/subscribe/route.js
import { NextResponse } from "next/server";
import { CreateContact, ContactsApi } from "@getbrevo/brevo";
import { isValidEmail, sanitizeMailHeaderChunk } from "@/lib/emailSafety";

const FIRSTNAME_MAX = 80;

export async function POST(req) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const rawFirst =
      typeof body?.firstName === "string"
        ? body.firstName.replace(/[^\p{L}\p{N}\s'-]/gu, "").trim()
        : "";
    const firstName = rawFirst ? sanitizeMailHeaderChunk(rawFirst, FIRSTNAME_MAX) : "";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (!process.env.BREVO_API_KEY) {
      console.error("Brevo subscribe: missing BREVO_API_KEY");
      return NextResponse.json({ error: "Newsletter signup is unavailable." }, { status: 503 });
    }

    // Init API client
    const contactAPI = new ContactsApi();
    contactAPI.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    // Build contact
    const contact = new CreateContact();
    contact.email = email;
    contact.updateEnabled = true; // update if exists

    contact.attributes = {};
    if (firstName) contact.attributes.FIRSTNAME = firstName;

    contact.listIds = [12];

    await contactAPI.createContact(contact);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo API Error:", err?.body || err.message);
    const apiStatus = err?.response?.statusCode ?? err?.statusCode;
    const msg = String(err?.body?.message || err?.message || "");

    if (apiStatus === 409 || /duplicate/i.test(msg)) {
      return NextResponse.json({ success: true });
    }
    if (apiStatus === 400) {
      return NextResponse.json({ error: "Invalid signup request." }, { status: 400 });
    }
    return NextResponse.json({ error: "Unable to subscribe. Please try again later." }, { status: 502 });
  }
}
