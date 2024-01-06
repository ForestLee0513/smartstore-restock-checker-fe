import { productInfoType } from "@/types/product";
import { atom } from "recoil";
import { persistAtom } from "./Persist";

export const productListState = atom<productInfoType[]>({
  key: "productList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
