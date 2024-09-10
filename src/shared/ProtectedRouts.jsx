import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth.js";
import { SING_IN } from "../utils/routes.js";
import useAuthStore from "../zustand/useAuthStore.js";
import useUserStore from "../zustand/userStore";

const ProtectedRouts = () => {
  console.log("----- ProtectedRouts 접근 -----");

  const navigate = useNavigate();

  const { user, setUser } = useUserStore();
  const { isLogin, setIsLogin } = useAuthStore();

  // enable 옵션?

  /**
   * 서버에서 토큰이 만료가 되었을때 처리를 위한 로직
   * 새로고침을 하면 이 로직이 작동하면서 토큰이 만료되면 로그인페이지로 이동
   */

  // useEffect(() => {
  //   const getUser = async () => {
  //     if (!isLogin) {
  //       try {
  //         const user = await getUserProfile(token);

  //         console.log("ProtectedRouts user :>> ", user);
  //         setUser(user.data);

  //         setIsLogin(true);
  //       } catch (error) {
  //         navigate(SING_IN);
  //       }
  //     }
  //   };
  //   getUser();
  // }, []);

  /** 로그인이 안된 상태이면 -> 로그인 페이지로 보내기 */
  if (!user) {
    alert("로그인해야 접근할 수 있습니다.");
    return <Navigate to={SING_IN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRouts;
