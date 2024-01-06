import { atom } from "recoil";
import { productInfoType } from "@/types/product";

export const editModeState = atom<boolean>({
  key: "editMode",
  default: false,
});

export const selectedDeleteItemsState = atom<productInfoType[]>({
  key: "selectedDeleteItems",
  default: [],
});
