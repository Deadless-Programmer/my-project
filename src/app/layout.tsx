import type { Metadata } from "next";
import {Spectral, Quicksand } from "next/font/google";
import "./globals.css";

// Heading font
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights
  display: "swap",
  variable: "--font-spectral",
});


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});




export const metadata: Metadata = {
  title: "My first next js app for practice fundamentals",
  description: "This is a next js app for learning purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectral.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
