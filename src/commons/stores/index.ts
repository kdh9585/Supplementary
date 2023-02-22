import { atom } from "recoil";

export const isLoginModalState = atom({
  key: "isLoginModalState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const infoUserState = atom({
  key: "infoUserState",
  default: {},
});
