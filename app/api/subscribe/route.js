// app/api/subscribe/route.js
import { NextResponse } from "next/server";
import { CreateContact, ContactsApi } from "@getbrevo/brevo";

export async function POST(req) {
  try {
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Init API client
    const contactAPI = new ContactsApi();
    contactAPI.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    // Build contact
    const contact = new CreateContact();
    contact.email = email;
    contact.updateEnabled = true; // update if exists

    // Only add FIRSTNAME if you’ve created it in Brevo dashboard
    contact.attributes = {};
    if (firstName) contact.attributes.FIRSTNAME = firstName;

    // Optional: only include list if you are sure ID is correct
    contact.listIds = [12];

    // Create contact
    const response = await contactAPI.createContact(contact);

    return NextResponse.json({ success: true, response });
  } catch (err) {
    console.error("Brevo API Error:", err?.body || err.message);
    return NextResponse.json(
      { error: err?.body?.message || err.message },
      { status: 500 }
    );
  }
}
