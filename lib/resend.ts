import { Resend } from "resend"

export const resend = new Resend(process.env.RESEND_API_KEY)

export const WAITLIST_AUDIENCE_ID = process.env.RESEND_WAITLIST_AUDIENCE_ID!
