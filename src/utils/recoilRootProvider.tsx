"use client";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1시간마다 Worker Thread에서 새로고침 적용
  useEffect(() => {
    const installServiceWorker = async () => {
      const notificationWorker = await navigator.serviceWorker.register(
        new URL("../worker/notification.worker.ts", import.meta.url)
      );

      if (notificationWorker.installing) {
        console.log("Service worker installing");
      } else if (notificationWorker.waiting) {
        console.log("Service worker installed");
      } else if (notificationWorker.active) {
        console.log("Service worker active");
      }
    };
    if ("serviceWorker" in navigator) {
      installServiceWorker();
    }
  }, []);

  useEffect(() => {
    Notification.requestPermission().then((status) => {
      console.log("Notification 상태", status);

      if (status === "denied") {
        console.log("Notification 거부됨");
      }
    });
  }, []);

  return <RecoilRoot>{children}</RecoilRoot>;
}
