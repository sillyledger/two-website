import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Confirm your spot | TWO",
  description: "Confirm your spot in the TWO beta waitlist.",
}

export default async function ConfirmWaitlist({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams
  const isSuccess = status === "success"

  return (
    <div className="inv-frame">
      <span className="inv-badge">Founding beta</span>
      <div className="inv-head">
        {isSuccess ? (
          <>
            <h1 className="display">You&apos;re confirmed.</h1>
            <p>Welcome to the founding beta. We&apos;ll email you when your invite opens.</p>
            <Link href="/" className="inv-link">Back to homepage</Link>
          </>
        ) : (
          <>
            <h1 className="display">This link is invalid or has expired.</h1>
            <p>Confirm links expire after 48 hours.</p>
            <Link href="/invite" className="inv-link">Try again</Link>
          </>
        )}
      </div>
    </div>
  )
}
