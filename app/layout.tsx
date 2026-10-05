import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "শতভাগ বাঙালি — আপনি কতটা বাঙালি?",
  description: "একটি মজার সাংস্কৃতিক অভিজ্ঞতা কুইজ।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <head>
        <meta
          name="google-site-verification"
          content="r-K0JJ02CWAirrBDr4LQS8ewM1HlO15KbxI_5kjbjTM"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
