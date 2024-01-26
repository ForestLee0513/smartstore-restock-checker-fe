import { productInfoType } from "@/types/product";
import { atom } from "recoil";
import { persistAtom } from "./Persist";

// 상품 리스트
export const productListState = atom<productInfoType[]>({
  key: "productList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 새로고침 시간
export const refreshDateState = atom<number>({
  key: "refreshDate",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
