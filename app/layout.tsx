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

// Canonical origin. Set NEXT_PUBLIC_SITE_URL once a real domain is connected;
// falls back to the Firebase App Hosting default URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aquariussolutions.com.do";

const title = "Aquarius Solutions — Ideas That Flow";
const description =
  "Aquarius Solutions builds bold digital products. Software, design, and cloud — engineered to flow.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Aquarius Solutions",
  },
  description,
  applicationName: "Aquarius Solutions",
  keywords: [
    "Aquarius Solutions",
    "software development",
    "product design",
    "cloud engineering",
    "digital products",
  ],
  authors: [{ name: "Aquarius Solutions" }],
  creator: "Aquarius Solutions",
  publisher: "Aquarius Solutions",
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
    url: "/",
    siteName: "Aquarius Solutions",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "mq8caGMhWnHgTrSMUowLbtOiKZjYMIVDqDl2SEtbJho",
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aquarius Solutions",
  url: siteUrl,
  description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
