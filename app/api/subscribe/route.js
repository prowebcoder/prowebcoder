// app/api/subscribe/route.js
import { NextResponse } from "next/server";
import Brevo from "@getbrevo/brevo";

export async function POST(req) {
  try {
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Configure Brevo client
    const client = new Brevo.ContactsApi();
    client.setApiKey(
      Brevo.ContactsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY // <-- set this in your .env.local
    );

    // Add contact
    const contact = {
      email,
      attributes: {
        FIRSTNAME: firstName || "", // Brevo attribute name
      },
      updateEnabled: true, // update if exists
      listIds: [2], // replace with your Brevo List ID
    };

    await client.createContact(contact);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brevo Error:", error.response?.body || error.message);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
