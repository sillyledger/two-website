export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-frame">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-mark">
              <img src="/logo-two.svg" alt="" width={28} height={28} />
              <span className="footer-logo-text">TWO</span>
            </div>
            <p className="footer-tagline">A better place to think and write.</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-col-title">Product</span>
              <a href="/product/features">Features</a>
              <a href="/solutions">Solutions</a>
              <a href="/pricing">Pricing</a>
              <a href="/roadmap">Roadmap</a>
              <a href="https://www.sorano.space/two-docs/changelog" target="_blank" rel="noopener noreferrer">
                Changelog
              </a>
              <a href="/demo" className="footer-demo-link">Try the demo</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Resources</span>
              <a href="/resources/templates">Templates</a>
              <a href="/resources/help">Help Center</a>
              <a href="/blog">Blog</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Compare</span>
              <a href="/compare/notion">TWO vs Notion</a>
              <a href="/compare/apple-notes">TWO vs Apple Notes</a>
              <a href="/compare/bear">TWO vs Bear</a>
              <a href="/compare/obsidian">TWO vs Obsidian</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Company</span>
              <a href="/contact">Contact</a>
              <a href="https://app.two.so/login">Log in</a>
              <a href="https://app.two.so/signup">Sign up</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/terms-of-service#refunds">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-frame">
        <div className="footer-bottom-row">
          <p>© 2026 TWO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
