// app/layout.tsx
import "../styles/globals.css";
import "../styles/typography.css";

import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

// ----------------------
// Fonts (Inter)
// ----------------------
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ----------------------
// Metadata
// ----------------------
export const metadata: Metadata = {
  title: {
    default: "CodeCanvas — Engineering-first Infra Platform",
    template: "%s | CodeCanvas",
  },
  description:
    "CodeCanvas는 결제·정산·데이터·보안·글로벌 인프라를 통합 제공하는 엔터프라이즈급 기술 플랫폼입니다.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.codecanvas.io",
    siteName: "CodeCanvas",
    title: "CodeCanvas — Engineering-first Infra Platform",
    description:
      "엔터프라이즈급 결제·정산·데이터·보안·글로벌 인프라를 단일 플랫폼으로 제공.",
    images: [
      { url: "/og/main.png", width: 1200, height: 630, alt: "OG Image" },
    ],
  },
};

// ----------------------
// Viewport (모바일 대응)
// ----------------------
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7b5cf4",
};

// ----------------------
// Schema.org
// ----------------------
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodeCanvas",
  url: "https://www.codecanvas.io",
  logo: "/og/logo.png",
  description:
    "엔터프라이즈급 결제·정산·데이터·보안 인프라 플랫폼",
  sameAs: [
    "https://www.linkedin.com/company/codecanvas",
    "https://github.com/codecanvas",
  ],
};

// ----------------------
// Layout Component
// ----------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>

      <body
        className="
    bg-[#f9f7ff]
    text-[#241f3a]
    antialiased
    min-h-screen
  "
      >
        <SmoothScroll>
          {/* 네비게이션 */}
          <Navbar />

          {/* 페이지 컨텐츠 */}
          <main className="pt-20">{children}</main>

          {/* Footer */}
          <Footer />
        </SmoothScroll>
      </body>

    </html>
  );
}
