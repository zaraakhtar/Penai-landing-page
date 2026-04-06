import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PentAI | Landing Page",
  description: "Official landing page for PentAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
