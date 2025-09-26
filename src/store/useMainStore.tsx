import { create } from "zustand";

type MainStore = {
  isWork: boolean;
};

export const useMainStore = create<MainStore>(() => ({
  isWork: false,
}));
