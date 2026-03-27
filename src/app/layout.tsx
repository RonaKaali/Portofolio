import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Rona Fatahilah | Web Developer",
  description: "Personal Portfolio of Ahmad Rona Fatahilah, a Web Developer specializing in Scrollytelling and high-end animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${manrope.variable} font-body antialiased selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
