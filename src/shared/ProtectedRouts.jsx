import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SING_IN } from "../utils/routes.js";
import useUserStore from "../zustand/userStore";
import useAuthStore from "../zustand/useAuthStore";

const ProtectedRouts = () => {
  // const { user } = useUserStore();

  // TODO 질문 : 어느 방법이 맞지?
  const token = localStorage.getItem("accessToken");

  const { isAuthenticated } = useAuthStore();

  /** 로그인이 안된 상태이면 -> 로그인 페이지로 보내기 */
  if (!isAuthenticated) {
    alert("로그인해야 접근할 수 있습니다.");
    return <Navigate to={SING_IN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRouts;
