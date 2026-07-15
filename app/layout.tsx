import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avery Andrews",
  description:
    "Finance-focused student interested in public markets, venture capital, entrepreneurship, and urban development.",
  metadataBase: new URL("https://averyandrews.org/"),
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-void font-sans text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
