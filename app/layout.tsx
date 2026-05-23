import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "TWO — Write better. Think clearer.",
  description: "Beautiful docs for individuals and small teams who live on Apple devices. Fast, focused, and nothing you don't need.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
