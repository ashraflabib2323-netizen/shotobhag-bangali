import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "শতভাগ বাঙালি — আপনি কতটা বাঙালি? | বাঙালি সংস্কৃতি কুইজ",
  description:
    "আপনি কতটা বাঙালি? খাবার, ফল, উৎসব, শৈশবের খেলা, গ্রামীণ জীবন ও বাঙালি সংস্কৃতির পরিচিত অভিজ্ঞতা বেছে নিয়ে জানুন আপনার ‘শতভাগ বাঙালি’ স্কোর। মজার এই সাংস্কৃতিক কুইজে নিজের বাঙালিত্ব যাচাই করুন এবং বন্ধুদের সঙ্গে ফলাফল শেয়ার করুন।",

  openGraph: {
    title: "শতভাগ বাঙালি — আপনি কতটা বাঙালি?",
    description:
      "বাঙালি সংস্কৃতির পরিচিত অভিজ্ঞতা বেছে নিয়ে জানুন আপনার ‘শতভাগ বাঙালি’ স্কোর।",
    url: "https://shotobhag-bangali.vercel.app",
    siteName: "শতভাগ বাঙালি",
    locale: "bn_BD",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "শতভাগ বাঙালি — আপনি কতটা বাঙালি?",
    description:
      "আপনি কতটা বাঙালি? মজার এই সাংস্কৃতিক কুইজে নিজের বাঙালিত্ব যাচাই করুন।",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
