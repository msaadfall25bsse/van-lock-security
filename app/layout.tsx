import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, Onest } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Van Lock Security London | Van Lock Installation UK",
  description:
    "Van Lock Security London offers expert van lock installation and anti-theft solutions across the UK. Protect your van, tools, and business with trusted security",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${manrope.variable} ${onest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
