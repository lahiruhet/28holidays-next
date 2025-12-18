import type { Metadata } from "next";
import { Lora, Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "28Holidays - Explore Sri Lanka with us",
  description: "Your Local Expert in Sri Lankan Adventure. Licensed and experienced tour guide company in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${cabin.variable} antialiased font-cabin`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
