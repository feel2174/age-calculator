import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "만 나이 계산기 | 정확한 나이 계산",
    template: "%s | 만 나이 계산기",
  },
  description:
    "생년월일을 입력하면 정확한 만 나이를 계산해드리는 빠르고 간편한 만 나이 계산기입니다.",
  keywords: ["만 나이", "나이 계산기", "생년월일", "나이 계산", "만 나이 계산기"],
  authors: [{ name: "만 나이 계산기" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "만 나이 계산기 | 정확한 나이 계산",
    description:
      "생년월일을 입력하면 정확한 만 나이를 계산해드리는 빠르고 간편한 만 나이 계산기입니다.",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "만 나이 계산기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "만 나이 계산기 | 정확한 나이 계산",
    description:
      "생년월일을 입력하면 정확한 만 나이를 계산해드리는 빠르고 간편한 만 나이 계산기입니다.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9196149361612087"
          async
          strategy="beforeInteractive"
        />
        <Script id="taboola-loader" strategy="beforeInteractive">
          {`(function() {
  var PUBLISHER_ID = 'zucca-network';
  var PAGE_TYPE = 'article';
  var LOADER_URL = '//cdn.taboola.com/libtrc/' + PUBLISHER_ID + '/loader.js';
  var LOADER_PRIVACY_URL = '//static.blobcontent.com/libtrc/' + PUBLISHER_ID + '/loader.privacy.js';
  var PIXEL_URL = 'https://static.qovani.com/libtrc/t5?type=pixel&publisher=' + PUBLISHER_ID;
  var SCRIPT_ID = 'tb_loader_script';

  window._taboola = window._taboola || [];

  var pageTypePush = {};
  pageTypePush[PAGE_TYPE] = 'auto';
  _taboola.push(pageTypePush);

  new Image().src = PIXEL_URL;

  var firstScript = document.getElementsByTagName('script')[0];

  function injectLoader(id, src, fallbackSrc) {
    if (document.getElementById(id)) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    s.id = id;
    if (fallbackSrc) {
      s.onerror = function() {
        if (s.parentNode) s.parentNode.removeChild(s);
        injectLoader(SCRIPT_ID + '_fb', fallbackSrc, null);
      };
    }
    firstScript.parentNode.insertBefore(s, firstScript);
  }

  injectLoader(SCRIPT_ID, LOADER_URL, LOADER_PRIVACY_URL);

  if (window.performance && typeof window.performance.mark === 'function') {
    window.performance.mark('tbl_ic');
  }
})();`}
        </Script>
        <meta
          name="google-site-verification"
          content="ylRZwQXQH9ZVegPDqDJGKHanYBIwb2fDMD_NWF917FI"
        />
        <meta
          name="naver-site-verification"
          content="d81ba3b0f2a3d7fd68ec5938c9d9d8a2e8ef9c65"
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}
        <footer className="mt-8 bg-gray-50 py-6">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} 만 나이 계산기. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
