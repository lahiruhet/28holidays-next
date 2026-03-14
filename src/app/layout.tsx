import type { Metadata } from "next";
import { Lora, Cabin } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteName = "28Holidays";
const siteUrl = "https://28holidays.com";
const siteTitle =
  "Rent a Car with Driver in Sri Lanka | Colombo Chauffeur & Airport Transfer Service";
const siteDescription =
  "Book a rent a car with driver service in Sri Lanka with 28Holidays. Private drivers, Colombo chauffeur service, airport transfers, tours, and van hire for tourists across Sri Lanka.";
const siteKeywords = [
  "rent a car with driver Sri Lanka",
  "car with driver Sri Lanka",
  "car rental with driver Sri Lanka",
  "chauffeur service Sri Lanka",
  "private driver Sri Lanka",
  "hire car with driver Sri Lanka",
  "Sri Lanka chauffeur service",
  "Sri Lanka driver hire",
  "luxury car with driver Sri Lanka",
  "rent a car with driver Colombo",
  "Colombo chauffeur service",
  "Colombo private driver",
  "Colombo car rental with driver",
  "airport pickup Colombo",
  "Bandaranaike airport transfer",
  "Colombo airport taxi service",
  "airport transfer Sri Lanka",
  "rent a car with driver Kandy",
  "rent a car with driver Galle",
  "rent a car with driver Ella",
  "rent a car with driver Negombo",
  "rent a car with driver Nuwara Eliya",
  "Sri Lanka private driver tour",
  "Sri Lanka car hire with driver for tour",
  "Sri Lanka chauffeur guide",
  "Sri Lanka driver guide service",
  "Sri Lanka travel driver hire",
  "best car rental with driver in Sri Lanka",
  "affordable car with driver Sri Lanka",
  "luxury chauffeur service Colombo",
  "Sri Lanka private driver for 7 day tour",
  "airport transfer Colombo to hotel",
  "hire van with driver Sri Lanka",
  "van rental with driver Sri Lanka",
  "luxury van with driver Sri Lanka",
  "Toyota Prius with driver Colombo",
  "Alphard rental with driver Sri Lanka",
  "wedding car with driver Colombo",
  "car with driver near me",
  "chauffeur service near me",
  "airport taxi near me Colombo",
  "28Holidays",
  "28Holidays Sri Lanka",
];

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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "travel",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/img/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "28Holidays Sri Lanka private tours and travel services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/img/hero/hero-1.jpg"],
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
  },
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
        <Script id="tawk-to-widget" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66320d66a0c6737bd13334b9/1hspo8msh';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
      </body>
    </html>
  );
}
