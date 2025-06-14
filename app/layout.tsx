import type { Metadata } from "next";
import { Public_Sans, Manrope, Sora, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
})

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Focus Tracker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${publicSans.variable} ${plusJakartaSans.variable} ${manrope.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
