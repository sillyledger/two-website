export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 32px', fontFamily: 'inherit', color: 'var(--foreground)', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.03em' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--muted-foreground)', fontSize: 14, marginBottom: 48 }}>Last updated: May 27, 2026</p>

      <p>TWO ("we", "us", or "our") operates the note-taking application available at <strong>app.two.so</strong> and the marketing website at <strong>two.so</strong>. This Privacy Policy explains how we collect, use, and protect your information.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Information We Collect</h2>
      <p>We collect information you provide directly, including your email address and password when you create an account. We also collect the content you create within the app (notes and documents) in order to provide the service.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>How We Use Your Information</h2>
      <ul style={{ paddingLeft: 20, marginTop: 0 }}>
        <li>To provide, maintain, and improve the TWO service</li>
        <li>To authenticate your account and keep it secure</li>
        <li>To send you essential service communications (e.g. password resets)</li>
        <li>To process payments via our payment provider, Paddle</li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Data Storage</h2>
      <p>Your data is stored securely in a hosted database (Neon). We do not sell your personal data or share it with third parties for marketing purposes.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Payments</h2>
      <p>Payment processing is handled by Paddle. We do not store your credit card information. Please refer to <a href="https://www.paddle.com/legal/privacy" style={{ color: 'inherit' }}>Paddle's Privacy Policy</a> for how payment data is handled.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Cookies</h2>
      <p>We use cookies solely for authentication purposes (to keep you logged in). We do not use tracking or advertising cookies.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Your Rights</h2>
      <p>You may request deletion of your account and associated data at any time by contacting us at <strong>hello@two.so</strong>. We will process your request within 30 days.</p>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Contact</h2>
      <p>Questions about this policy? Email us at <strong>hello@two.so</strong>.</p>

      <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', gap: 24, fontSize: 13, color: 'var(--muted-foreground)' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>← Back to two.so</a>
        <a href="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
      </div>
    </main>
  )
}
