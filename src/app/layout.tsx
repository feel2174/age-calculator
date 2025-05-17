import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "만 나이 계산기 | 정확한 만 나이 계산",
    template: "%s | 만 나이 계산기"
  },
  description: "생년월일을 입력하면 정확한 만 나이를 계산해드립니다. 간단하고 빠른 만 나이 계산기입니다.",
  keywords: ["만 나이", "나이 계산기", "생년월일", "나이 계산", "만 나이 계산기"],
  authors: [{ name: "만 나이 계산기" }],
  openGraph: {
    title: "만 나이 계산기 | 정확한 만 나이 계산",
    description: "생년월일을 입력하면 정확한 만 나이를 계산해드립니다. 간단하고 빠른 만 나이 계산기입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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
