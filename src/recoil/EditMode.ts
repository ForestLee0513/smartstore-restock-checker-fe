import { atom } from "recoil";

export const editModeState = atom<boolean>({
  key: "editMode",
  default: false,
});
