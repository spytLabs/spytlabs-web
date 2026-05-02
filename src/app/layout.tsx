import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "spytLabs",
    template: "%s | spytLabs",
  },
  description:
    "spytLabs provides AI automation, design, productions, and technical services for ambitious teams.",
  keywords: [
    "spytLabs",
    "AI automation",
    "design services",
    "productions",
    "commercials",
    "social media",
    "technical services",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "spytLabs",
    title: "spytLabs",
    description:
      "spytLabs provides AI automation, design, productions, and technical services for ambitious teams.",
    images: [
      {
        url: "/figma-assets/spyt-bg.png",
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
      "spytLabs provides AI automation, design, productions, and technical services for ambitious teams.",
    images: ["/figma-assets/spyt-bg.png"],
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
        {children}
      </body>
    </html>
  );
}
