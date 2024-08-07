"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../styles/ui.css";
import Providers from "@/components/common/layout/Providers";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: {
//     default: "Deebo",
//     template: "%s | 홈",
//   },
//   description: "Deeper, Wider. 예술인 프로필 플랫폼 Deebo.",
//   openGraph: {
//     title: "Deebo",
//     description: "Deeper, Wider. 예술인 프로필 플랫폼 Deebo.",
//     images: ["/images/og-image.jpg"],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-Kr">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
