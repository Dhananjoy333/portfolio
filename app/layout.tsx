import { Barlow_Condensed, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}