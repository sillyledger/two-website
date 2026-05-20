import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Notification to you
    await resend.emails.send({
      from: "TWO APP <news@two.so>",
      to: process.env.WAITLIST_TO!,
      subject: `New waitlist signup: ${email}`,
      html: `<p>${email} joined the TWO waitlist.</p>`,
    });

    // Confirmation email to the user
    await resend.emails.send({
      from: "TWO <hello@two.so>",
      to: email,
      subject: "You're on the TWO waitlist",
      html: `
        <h1>Welcome to TWO</h1>
        <p>Thanks for joining the waitlist.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
