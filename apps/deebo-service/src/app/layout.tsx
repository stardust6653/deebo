import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "디보 [Deebo]",
  description: "Deeper, Wider. 예술인 프로필 플랫폼 Deebo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-Kr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
