import { create } from "zustand";

const useAuthStore = create((set) => {
  const token = localStorage.getItem("accessToken");
  console.log("authStore token :>> ", token);

  // null이면, !null은 true, 다시 한 번 !true를 하면 최종적으로 false
  return {
    isAuthenticated: token,
    setAuthenticated: (isAuth) =>
      set(() => ({
        isAuthenticated: isAuth,
      })),
  };
});

export default useAuthStore;
