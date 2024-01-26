import { productInfoType } from "@/types/product";

const INTERVAL_TIME = 1000; // 1sec

const channel = new BroadcastChannel("sw-messages");

interface RefreshProductResponse<T> {
  status: "success";
  command: "refreshProducts";
  data: T;
}

channel.addEventListener("message", (event) => {
  const message = event.data;

  if (message.command === "refreshProducts") {
    const response: RefreshProductResponse<{
      newData: productInfoType[];
      previousData: productInfoType[];
    }> = message;

    const restockedProducts = response.data.newData.filter(
      (newItem: productInfoType, index: number) => {
        const previousItem = response.data.previousData[index];

        // 이전 상태에서 품절이고 현재 상태에서 품절이 아니라면 재입고 된 것으로 처리.
        return previousItem.soldout === true && newItem.soldout === false;
      }
    );

    console.log(restockedProducts);

    if (restockedProducts.length > 0) {
      // @ts-ignore
      self.registration.showNotification(
        `현재 총 ${restockedProducts.length}개의 상품이 재입고 됐어요.`
      );
    }
  }
});

//현재 상품목록 얻어오기
setInterval(() => {
  channel.postMessage({ command: "refreshProducts" });
}, INTERVAL_TIME * 60 * 60);

// 새로고침 하고나서 품절된 상품이 갱신되었는지 확인.
self.addEventListener("message", (event) => {
  const message = event.data;

  // 새로고침
  if (message.status === "success" && message.type === "refreshItems") {
    console.log(message.data);
  }
});
