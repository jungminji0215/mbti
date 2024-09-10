import { create } from "zustand";

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
