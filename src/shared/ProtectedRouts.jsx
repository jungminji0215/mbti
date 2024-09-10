import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SING_IN } from "../utils/routes.js";
import useUserStore from "../zustand/userStore";

const ProtectedRouts = () => {
  const { isLogin } = useUserStore();

  // enable 옵션?

  /**
   * 서버에서 토큰이 만료가 되었을때 처리를 위한 로직
   * 새로고침을 하면 이 로직이 작동하면서 토큰이 만료되면 로그인페이지로 이동
   */

  /**
   * 새로고침하면 이 로직이 작동 -> 새로고침하면 isLogin 이 false 가 되는 상황
   * 여기서 유저 스토어에 있는 토큰으로 유저정보를 조회
   * - 유저 정보 없음 : 로그인 하라는 alert
   * - 토큰이 만료 : 토큰 오류 메세지
   * - 정상 :  setIsLogin(true);
   */

  // useEffect(() => {
  //   const getUser = async () => {
  //     if (!isLogin) {
  //       try {
  //         const user = await getUserProfile(token);

  //         console.log("ProtectedRouts user :>> ", user);

  //         setIsLogin(true);
  //       } catch (error) {
  //         navigate(SING_IN);
  //       }
  //     }
  //   };
  //   getUser();
  // }, []);

  /** 로그인이 안된 상태이면 -> 로그인 페이지로 보내기 */
  if (!isLogin) {
    alert("로그인해야 접근할 수 있습니다.");
    return <Navigate to={SING_IN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRouts;
