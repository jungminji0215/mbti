import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SING_IN } from "../../utils/routes.js";

const ProtectedRouts = () => {
  // TODO 임시
  const isLogin = true;

  // 로그인이 안된 상태이면 -> 로그인 페이지로 보내기
  if (!isLogin) {
    // TODO LINK 랑 무슨차이지?
    alert("로그인해야 접근할 수 있습니다.");
    return <Navigate to={SING_IN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRouts;
