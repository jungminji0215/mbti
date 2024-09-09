import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create((set) => {
  return {
    isLogin: false,
    setIsLogin: () => {
      set((value) => {
        return { isLogin: value };
      });
    },
  };
});

export default useAuthStore;
