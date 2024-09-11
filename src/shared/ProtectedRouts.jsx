import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { SING_IN } from "../utils/routes.js";
import useUserStore from "../zustand/userStore";
import { getUserProfile } from "../api/auth";

const ProtectedRouts = () => {
  const { user, isLogin, setIsLogin, setUser, pageType } = useUserStore();

  const navigate = useNavigate();
  const clearUserIdStorage = useUserStore.persist.clearStorage;

  /**
   * 로그인 했을 경우, 새로고침하면 이 로직이 작동
   * -> 회원 정보 조회해서 토큰 유효한지 판단
   * -> 오류 발생하면 로그아웃 처리 후, 로그인 페이지로 이동
   */
  useEffect(() => {
    const getUser = async () => {
      if (isLogin) {
        try {
          await getUserProfile(user.accessToken);
        } catch (error) {
          setUser(null);
          setIsLogin(false);

          // 저장된 persist 데이터 삭제
          clearUserIdStorage();

          // alert(error.response.data.message);
          navigate(SING_IN);
        }
      }
    };
    getUser();
  }, [pageType]);

  /** 로그인이 안된 상태이면 -> 로그인 페이지로 보내기 */
  if (!isLogin) {
    alert("로그인 후 이용해주세요.");
    return <Navigate to={SING_IN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRouts;
