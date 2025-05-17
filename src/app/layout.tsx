import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "만 나이 계산기 | 정확한 만 나이 계산",
    template: "%s | 만 나이 계산기"
  },
  description: "생년월일을 입력하면 정확한 만 나이를 계산해드립니다. 간단하고 빠른 만 나이 계산기입니다.",
  keywords: ["만 나이", "나이 계산기", "생년월일", "나이 계산", "만 나이 계산기"],
  authors: [{ name: "만 나이 계산기" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "만 나이 계산기 | 정확한 만 나이 계산",
    description: "생년월일을 입력하면 정확한 만 나이를 계산해드립니다. 간단하고 빠른 만 나이 계산기입니다.",
    type: "website",
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: '만 나이 계산기',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '만 나이 계산기 | 정확한 만 나이 계산',
    description: '생년월일을 입력하면 정확한 만 나이를 계산해드립니다. 간단하고 빠른 만 나이 계산기입니다.',
    images: ['/og.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9196149361612087"
          async
          strategy="beforeInteractive"
        />
        <meta name="google-site-verification" content="ylRZwQXQH9ZVegPDqDJGKHanYBIwb2fDMD_NWF917FI" />
        <meta name="naver-site-verification" content="d81ba3b0f2a3d7fd68ec5938c9d9d8a2e8ef9c65" />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-50 py-6 mt-8">
          <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} 만 나이 계산기. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
