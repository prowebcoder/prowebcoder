import nodemailer from "nodemailer";
import { escapeHtml, isValidEmail, sanitizeMailHeaderChunk } from "@/lib/emailSafety";

export const dynamic = "force-dynamic";

const MAX_MESSAGE_LEN = 20000;

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message, recaptchaToken } = body;

    if (typeof name !== "string" || !name.trim()) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    if (!email || !recaptchaToken || typeof recaptchaToken !== "string") {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    if (typeof message !== "string" || !message.trim()) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const nameSafe = sanitizeMailHeaderChunk(name, 120);
    if (!nameSafe) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }
    const subjectSafe = sanitizeMailHeaderChunk(subject ?? "", 200);
    const messageStr = message;

    if (messageStr.length > MAX_MESSAGE_LEN) {
      return new Response(JSON.stringify({ error: "Message too long" }), { status: 400 });
    }

    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    }

    const emailSafe = email.trim();

    // ✅ reCAPTCHA verification
    const verifyParams = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY ?? "",
      response: recaptchaToken,
    });
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyParams.toString(),
    });

    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      return new Response(JSON.stringify({ error: "reCAPTCHA failed" }), { status: 400 });
    }

    // ✅ Setup transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const fromDisplay = sanitizeMailHeaderChunk(nameSafe.replace(/"/g, ""), 100);
    const mailFrom = `"${fromDisplay} via PWC Contact Form" <${process.env.EMAIL_USER}>`;

    const nameHtml = escapeHtml(nameSafe);
    const emailHtml = escapeHtml(emailSafe);
    const subjectHtml = escapeHtml(subjectSafe || "N/A");
    const messageHtml = escapeHtml(messageStr).replace(/\n/g, "<br/>");

    // ✅ Send main email to YOU
    await transporter.sendMail({
      from: mailFrom,
      to: process.env.EMAIL_TO,
      replyTo: emailSafe,
      subject: subjectSafe || "New Request",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${nameHtml}</p>
        <p><strong>Email:</strong> ${emailHtml}</p>
        <p><strong>Subject:</strong> ${subjectHtml}</p>
        <p><strong>Message:</strong><br/>${messageHtml}</p>
      `,
    });

    // ✅ Generate random ticket number
    const ticketNumber = Math.floor(100000 + Math.random() * 900000);

    const nameForAuto = escapeHtml(nameSafe);

    // ✅ Auto-reply HTML
    const autoReplyHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
        <a href="https://prowebcoder.com" target="_blank" style="display: inline-block;">
          <img src="https://prowebcoder.com/assets/images/common/pwc.png" alt="PWC Logo" width="250" />
          </a>
        </div>
        <h2 style="color: #333;"><span style="color: #fe8f00;">Hi</span> ${nameForAuto},</h2>
        <p style="color: #555;">
          Thanks for reaching out to <strong>Prowebcoder</strong>! We've received your message and our team will get back to you within <strong>12 business hours</strong>.
        </p>
        <p style="color: #555;">
          Your support ticket number is: <strong>#${ticketNumber}</strong>
        </p>
        <p style="color: #555;">While you wait, feel free to check out our <a href="https://prowebcoder.com/faq" style="color: #fe8f00;">FAQs</a> or <a href="https://prowebcoder.com/contact-us" style="color: #fe8f00;">Support Page</a>.</p>
        <hr style="margin: 30px 0;" />
        <p style="color: #888; font-size: 12px;">
          This is an automated message. If you did not submit this form, please disregard this email.
        </p>
        <p style="color: #888; font-size: 12px;">
          Prowebcoder<br />
          rahul@prowebcoder.com | <a href="https://prowebcoder.com" style="color: #888;">https://prowebcoder.com</a>
        </p>
      </div>
    `;

    // ✅ Send auto-reply to USER
    await transporter.sendMail({
      from: `"Prowebcoder Team" <${process.env.EMAIL_USER}>`,
      to: emailSafe,
      subject: `✅ We've received your message – Ticket #${ticketNumber}`,
      html: autoReplyHTML,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("🔥 Contact API error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
