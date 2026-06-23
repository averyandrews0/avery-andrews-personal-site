import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avery Andrews",
  description:
    "Finance-focused student interested in public markets, venture capital, entrepreneurship, and urban development."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
