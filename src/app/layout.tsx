import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modafinil Australia Direct | Buy Premium Modafinil Online",
  description: "Australia's trusted supplier of premium Modafinil. Fast, discreet shipping with guaranteed delivery. Buy Modafinil online from Sydney with confidence.",
  keywords: "modafinil, buy modafinil, modafinil australia, modafinil sydney, nootropics, cognitive enhancement, modalert, modvigil",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Modafinil Australia Direct | Your Trusted Source for Cognitive Enhancement",
    description: "Australia's #1 trusted supplier of premium Modafinil. Fast, discreet shipping Australia-wide with guaranteed delivery.",
    type: "website",
    locale: "en_AU",
    siteName: "Modafinil Australia Direct",
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Modafinil Australia Direct - Premium Cognitive Enhancement',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modafinil Australia Direct | Buy Premium Modafinil Online",
    description: "Australia's trusted supplier of premium Modafinil. Fast, discreet shipping with guaranteed delivery.",
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartSidebar />
      </body>
    </html>
  );
}

