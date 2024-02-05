import type { Metadata } from "next";

import "@/app/globals.css";
import RecoilRootProvider from "@/utils/recoilRootProvider";

export const metadata: Metadata = {
  title: "리노티",
  description: "스마트스토어의 상품 중 품절된 상품이 재입고 됐다면 알려드려요.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRootProvider>
      <div
        className={`grid grid-cols-4 pc:grid-cols-8 gap-[20px] pc:gap-[40px] mx-auto w-[90%] pc:max-w-[1920px] prose dark:prose-invert auto-rows-max pc:w-[90%])] pt-[10px]`}
      >
        {children}
      </div>
    </RecoilRootProvider>
  );
}
