import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "TWO — Your work, beautifully organized.",
  description: "A modern note-taking app for capturing ideas, organizing what matters, and finding clarity every day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
