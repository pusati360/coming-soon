import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pusati360.com'),
  title: "Pusati 360",
  description: "En son teknolojik gelişmeler, yerli üretim projeleri ve küresel savunma stratejileri hakkında derinlemesine bilgi mi edinmek istiyorsunuz? O zaman doğru adrestesiniz!",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pusati 360",
  },
  icons: {
    icon: [
      { url: "/pusati360-1.png", sizes: "192x192", type: "image/png" },
      { url: "/pusati360-2.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/pusati360-1.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Pusati 360",
    description: "En son teknolojik gelişmeler, yerli üretim projeleri ve küresel savunma stratejileri hakkında derinlemesine bilgi.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/pusati360-1.png",
        width: 192,
        height: 192,
        alt: "Pusati 360 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pusati 360",
    description: "En son teknolojik gelişmeler, yerli üretim projeleri ve küresel savunma stratejileri hakkında derinlemesine bilgi.",
    images: ["/pusati360-1.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="application-name" content="Pusati 360" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pusati 360" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#22c55e" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="apple-touch-icon" href="/pusati360-1.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/pusati360-1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pusati360-1.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/pusati360-1.png" color="#22c55e" />
        <link rel="shortcut icon" href="/pusati360-1.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
