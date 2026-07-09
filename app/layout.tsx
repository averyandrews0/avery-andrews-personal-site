import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avery Andrews",
  description:
    "Finance-focused student interested in public markets, venture capital, entrepreneurship, and urban development.",
  metadataBase: new URL("https://averyandrews0.github.io/avery-andrews-personal-site/"),
  openGraph: {
    title: "Avery Andrews",
    description: "Finance, investing & ideas.",
    images: ["/og.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Avery Andrews",
    description: "Finance, investing & ideas.",
    images: ["/og.png"]
  }
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
