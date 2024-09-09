import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => {
      // const isLogin = localStorage.getItem("accessToken");

      return {
        // isLogin: !!isLogin,
        user: null,
        token: null,
        setToken: (user) =>
          set(() => {
            return {
              token: user.accessToken,
            };
          }),
        setUser: (userData) =>
          set(() => {
            return { user: userData };
          }),
        updateNickname: (newNickname) =>
          set((state) => {
            return {
              user: {
                ...state.user,
                nickname: newNickname,
              },
            };
          }),
        // setIsLogin: () => {
        //   set(() => {
        //     return { isLogin: !isLogin };
        //   });
        // },
      };
    },
    { name: "userInfo" }
  )
);

export default useUserStore;
