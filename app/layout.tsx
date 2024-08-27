import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {fontMono} from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AnimatedFirstPageLoad } from "@/components/animation/animatedFirstPageLoading";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: siteConfig.keywords,
  generator: siteConfig.name,
  verification: {
    google: siteConfig.google,
    yandex: siteConfig.yandex,
    yahoo: siteConfig.yahoo,
    other: {
      me: [
        siteConfig.email,
        siteConfig.links.linkedin,
        siteConfig.links.facebook,
        siteConfig.links.instagram,
        siteConfig.links.twitter,
        siteConfig.links.pinterest,
      ],
      bing: siteConfig.bing,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.lang,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.image}`,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
      "application/xml": `${siteConfig.url}/sitemap.xml`,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-mono antialiased",
          fontMono.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
          <AnimatedFirstPageLoad />
          <Navbar />
          <main>{children}
          </main>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
