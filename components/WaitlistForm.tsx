"use client"

import { useState, FormEvent } from "react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setError("")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.")
        setStatus("error")
        return
      }

      setStatus("success")
    } catch {
      setError("Something went wrong. Try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return <p className="inv-caption">Check your inbox to confirm your spot.</p>
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="inv-form">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Joining..." : "Join waitlist"}
        </button>
      </form>
      {status === "error" && <p className="inv-error">{error}</p>}
    </div>
  )
}
