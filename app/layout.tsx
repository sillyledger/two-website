import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TWO — Write better. Think clearer.",
  description: "Beautiful docs for individuals and small teams who live on Apple devices. Fast, focused, and nothing you don't need.",
  applicationName: "TWO",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600&family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-two.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="TWO" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-84HMJNBNS1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-84HMJNBNS1');
          `}
        </Script>
      </head>
      <body style={{ background: "#161618" }}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
