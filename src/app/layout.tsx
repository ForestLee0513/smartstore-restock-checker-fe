import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스마트스토어 재입고 알리미",
  description: "재입고 알림 기능이 없는 스마트스토어에 알림기능을 추가합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <div
          className={`grid grid-cols-4 pc:grid-cols-8 pc:gap-[40px] mx-auto w-[90%] pc:max-w-[1920px] prose dark:prose-invert auto-rows-max pc:w-[90%])]`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
