import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TWO",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <p className="legal-eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: May 27, 2026</p>

      <p>
        TWO (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the note-taking application available at{" "}
        <strong>app.two.so</strong> and the marketing website at <strong>two.so</strong>. This Privacy Policy explains
        how we collect, use, and protect your information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly, including your email address and password when you create an
        account. We also collect the content you create within the app (notes and documents) in order to provide the
        service.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide, maintain, and improve the TWO service</li>
        <li>To authenticate your account and keep it secure</li>
        <li>To send you essential service communications (e.g. password resets)</li>
        <li>To process payments via our payment provider, Paddle</li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        Your data is stored securely in a hosted database (Neon). We do not sell your personal data or share it with
        third parties for marketing purposes.
      </p>

      <h2>Payments</h2>
      <p>
        Payment processing is handled by Paddle. We do not store your credit card information. Please refer to{" "}
        <a href="https://www.paddle.com/legal/privacy">Paddle&apos;s Privacy Policy</a> for how payment data is
        handled.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies solely for authentication purposes (to keep you logged in). We do not use tracking or
        advertising cookies.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request deletion of your account and associated data at any time by contacting us at{" "}
        <strong>hey@two.so</strong>. We will process your request within 30 days.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at <strong>hey@two.so</strong>.
      </p>
    </main>
  );
}
