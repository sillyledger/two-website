import type { Metadata } from "next"
import { Infinity, ArrowUpCircle, MessageCircle } from "lucide-react"
import WaitlistForm from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Beta Access | TWO",
  description: "Join the TWO beta. Get lifetime access to every feature, grandfathered through every upgrade.",
}

export default function Invite() {
  return (
    <div className="inv-frame">
      <span className="inv-badge">Founding beta</span>

      <div className="inv-head">
        <h1 className="display">
          Lifetime access.
          <br />
          Before anyone else.
        </h1>
        <p>
          Join a small group of beta testers and get every feature, free, for as long as TWO exists.
          You&apos;ll stay grandfathered through every future upgrade.
        </p>
      </div>

      <WaitlistForm />
      <p className="inv-caption">68 spots left in this round.</p>

      <div className="inv-cards">
        <div className="inv-card">
          <Infinity size={19} style={{ color: "var(--green)" }} />
          <h3>Lifetime access</h3>
          <p>Every feature, free, for good.</p>
        </div>
        <div className="inv-card">
          <ArrowUpCircle size={19} style={{ color: "var(--indigo)" }} />
          <h3>Grandfathered upgrades</h3>
          <p>Future paid tiers, on us.</p>
        </div>
        <div className="inv-card">
          <MessageCircle size={19} style={{ color: "var(--clay)" }} />
          <h3>Shape the product</h3>
          <p>Pieter reads every reply.</p>
        </div>
      </div>
    </div>
  )
}
