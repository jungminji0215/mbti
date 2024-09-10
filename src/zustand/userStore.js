import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => {
      return {
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
      };
    },
    { name: "userInfo" }
  )
);

export default useUserStore;
