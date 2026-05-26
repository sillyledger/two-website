export default function TermsOfService() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 32px', fontFamily: 'inherit', color: 'var(--foreground)', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.03em' }}>Terms of Service</h1>
      <p style={{ color: 'var(--muted-foreground)', fontSize: 14, marginBottom: 48 }}>Last updated: May 27, 2026</p>

      <p>These Terms of Service govern your use of TWO, the note-taking application available at <strong>app.two.so</strong>. By creating an account, you agree to these terms.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Use of the Service</h2>
      <p>You may use TWO for personal and professional note-taking purposes. You agree not to use the service to store or distribute unlawful content, attempt to reverse-engineer the application, or interfere with its operation.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Your Content</h2>
      <p>You retain full ownership of all notes and documents you create in TWO. We do not claim any rights to your content. You are responsible for the content you store in the service.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Account Termination</h2>
      <p>You may delete your account at any time. We reserve the right to suspend or terminate accounts that violate these terms.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Availability</h2>
      <p>We aim to provide a reliable service but do not guarantee uninterrupted availability. We are not liable for any loss of data or interruption of service.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Changes to These Terms</h2>
      <p>We may update these terms from time to time. Continued use of TWO after changes are posted constitutes acceptance of the updated terms.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12, scrollMarginTop: 80 }} id="refunds">Refund Policy</h2>
      <p>We offer a <strong>14-day free trial</strong> on all paid plans — no credit card required. This gives you full access before any payment is taken.</p>
      <p style={{ marginTop: 12 }}>If you are charged and feel it was in error, contact us at <strong>hello@two.so</strong> within 14 days of the charge and we will issue a full refund, no questions asked.</p>
      <p style={{ marginTop: 12 }}>For the Founding Member one-time purchase: refunds are available within 30 days of purchase if you are unsatisfied with the service.</p>
      <p style={{ marginTop: 12 }}>Refund requests after these windows will be considered on a case-by-case basis. To request a refund, email <strong>hello@two.so</strong>.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Contact</h2>
      <p>Questions? Email us at <strong>hello@two.so</strong>.</p>

      <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', gap: 24, fontSize: 13, color: 'var(--muted-foreground)' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>← Back to two.so</a>
        <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
      </div>
    </main>
  )
}
