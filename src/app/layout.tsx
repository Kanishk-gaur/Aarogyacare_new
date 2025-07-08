import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AarogyCare – Trusted Medical Tourism India | Kazakhstan & Russia",
  description:
    "AarogyCare is a leading medical tourism platform helping patients from Kazakhstan, Russia, and CIS countries access world-class treatment in India. Trusted hospitals, personalized care, and full travel support.",
  keywords:
    "AarogyCare, medical tourism India, India healthcare, Kazakhstan patients, Russian patients, hospitals in India, medical treatment abroad, CIS medical travel",
  icons: {
    icon: "/favicon2.png",
  },
  alternates: {
    canonical: "https://aarogycare.com",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
