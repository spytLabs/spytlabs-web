import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { company } from "@/lib/company";
import { organizationGraph } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spytlabs.com"),
  title: {
    default: "spytLabs",
    template: "%s | spytLabs",
  },
  description:
    company.description,
  keywords: [
    "spytLabs",
    "AI automation",
    "design services",
    "productions",
    "commercials",
    "social media",
    "technical services",
    "Sri Lanka",
    "Sri Lankan"
  ],
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "/",
    siteName: "spytLabs",
    title: "spytLabs",
    description:
      company.description,
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "spytLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "spytLabs",
    description:
      company.description,
    images: ["/og/default.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="m-0 flex min-h-full flex-col text-[#111216] font-(--font-geist-sans)">
        <JsonLd data={organizationGraph()} />
        {children}
      </body>
    </html>
  );
}
