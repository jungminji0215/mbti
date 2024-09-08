import { create } from "zustand";

// MEMO : useUserStore 는 애플리케이션이 로드될때 실행된다?? React 컴포넌트가 렌더링되기 전에 이미 메모리에 올라가 있다?
const useUserStore = create((set) => {
  return {
    user: null,
    setUser: (userData) =>
      set(() => ({
        user: userData,
      })),
    updateNickname: (newNickname) =>
      set((state) => {
        return {
          ...state.user,
          nickname: newNickname,
        };
      }),
  };
});

export default useUserStore;
