import type { Metadata } from "next";

import "./globals.css";
import RecoilRootProvider from "@/utils/recoilRootProvider";

export const metadata: Metadata = {
  title: "리노티",
  description: "스마트스토어의 상품 중 품절된 상품이 재입고 됐다면 알려드려요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <RecoilRootProvider>
        <body>{children}</body>
      </RecoilRootProvider>
    </html>
  );
}
