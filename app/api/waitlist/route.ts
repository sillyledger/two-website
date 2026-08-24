import { NextRequest, NextResponse } from "next/server"
import { resend, WAITLIST_AUDIENCE_ID } from "@/lib/resend"
import { createConfirmToken } from "@/lib/waitlist-token"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SITE_URL = "https://www.two.so"

function confirmEmailHtml(confirmUrl: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#161618;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#161618;padding:40px 20px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;">
            <tr>
              <td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#8f89e6;padding-bottom:16px;">
                Founding beta
              </td>
            </tr>
            <tr>
              <td style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;color:#e8e8e8;padding-bottom:16px;">
                Confirm your spot
              </td>
            </tr>
            <tr>
              <td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:rgba(232,232,232,0.7);padding-bottom:28px;">
                One click and you are in. This link expires in 48 hours.
              </td>
            </tr>
            <tr>
              <td style="padding-bottom:28px;">
                <a href="${confirmUrl}" style="display:inline-block;background-color:#8f89e6;color:#1e1b3d;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:999px;">
                  Confirm my spot
                </a>
              </td>
            </tr>
            <tr>
              <td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgba(232,232,232,0.4);">
                If you did not request this, you can ignore this email.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export async function POST(request: NextRequest) {
  let body: { email?: string } = {}
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const email = body.email

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
  }

  const trimmedEmail = email.trim()

  try {
    const { error } = await resend.contacts.create({
      email: trimmedEmail,
      audienceId: WAITLIST_AUDIENCE_ID,
      unsubscribed: true,
    })

    if (error) {
      console.error("Failed to add waitlist contact:", error)
      return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
    }

    let token: string | undefined
    try {
      if (!process.env.CONFIRM_TOKEN_SECRET) {
        console.error("CONFIRM_TOKEN_SECRET is not set, cannot generate confirm token")
      }
      token = createConfirmToken(trimmedEmail)
    } catch (tokenError) {
      console.error("Failed to generate confirm token:", tokenError)
    }

    if (token) {
      const confirmUrl = `${SITE_URL}/api/waitlist/confirm?token=${token}`
      try {
        const { error: emailError } = await resend.emails.send({
          from: "TWO <beta@two.so>",
          to: trimmedEmail,
          subject: "Confirm your spot in the TWO beta",
          html: confirmEmailHtml(confirmUrl),
        })

        if (emailError) {
          console.error("Failed to send confirmation email:", emailError)
        }
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to join waitlist:", error)
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
