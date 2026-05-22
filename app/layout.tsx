import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "TWO — Write without the database.",
  description: "A fast, beautiful writing app for content creators and small teams. Built for iPad Pro and Mac first.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
