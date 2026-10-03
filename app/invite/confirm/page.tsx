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
    <div className="features-frame ivx">
      <section className="ivx-confirm">
        <p className="micro ivx-eyebrow">Founding beta</p>
        {isSuccess ? (
          <>
            <h1 className="display">
              You&apos;re confirmed.
              <br />
              <span>Welcome in.</span>
            </h1>
            <p>Welcome to the founding beta. We&apos;ll email you when your invite opens.</p>
            <div className="ivx-confirm-btns">
              <Link href="/demo" className="ivx-btn solid">Try the live demo</Link>
              <Link href="/" className="ivx-btn outline">Back to homepage</Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="display">
              Link expired.
              <br />
              <span>Let&apos;s try again.</span>
            </h1>
            <p>Confirm links expire after 48 hours, or this one may be invalid. Join again and we&apos;ll send a fresh link.</p>
            <div className="ivx-confirm-btns">
              <Link href="/invite" className="ivx-btn solid">Try again</Link>
            </div>
          </>
        )}
      </section>
    </div>
  )
}
