import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => {
      return {
        user: null,
        isLogin: false,
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
        // resetUser: () =>
        // set(() => ({
        //   user: null,
        //   isLogin: false,
        // })),
      };
    },
    { name: "userInfo" }
  )
);

export default useUserStore;
