// app/api/subscribe/route.js  (App Router)
import { NextResponse } from "next/server";
import Brevo from "@getbrevo/brevo";

export async function POST(req) {
  try {
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const client = new Brevo.ContactsApi();
    client.setApiKey(
      Brevo.ContactsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const contact = {
      email,
      attributes: {
        FIRSTNAME: firstName || "",
      },
      updateEnabled: true,
      listIds: [12], // change to your Brevo list ID
    };

    const response = await client.createContact(contact);

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Brevo API Error:", error?.response?.body || error.message);
    return NextResponse.json(
      { error: error?.response?.body || error.message },
      { status: 500 }
    );
  }
}
