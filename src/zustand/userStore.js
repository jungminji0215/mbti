import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => {
      return {
        user: null,
        isLogin: false,
        pageType: "",
        setPageType: (type) => {
          console.log("useUserStore type :>> ", type);
          set(() => {
            return { pageType: type };
          });
        },
        setUser: (userData) =>
          set(() => {
            return { user: userData };
          }),
        setIsLogin: (isLogIn) => {
          set(() => {
            return { isLogin: isLogIn };
          });
        },
        updateNickname: (newNickname) =>
          set((state) => {
            return {
              user: {
                ...state.user,
                nickname: newNickname,
              },
            };
          }),
      };
    },
    { name: "userInfo" }
  )
);

export default useUserStore;
