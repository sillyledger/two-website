import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "TWO — Write better. Think clearer.",
  description: "Beautiful docs for individuals and small teams who live on Apple devices. Fast, focused, and nothing you don't need.",
  applicationName: "TWO",
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
        <link rel="icon" href="/logo-two.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="TWO" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
