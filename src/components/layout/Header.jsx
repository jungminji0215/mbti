/** react 라이브러리 */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

/** 상태관리 */
import useUserStore from "../../zustand/userStore";

import { PROFILE, TEST_RESULT, TEST, SING_IN, HOME } from "../../utils/routes";

const Header = () => {
  const { user, setPageType, setUser, setIsLogin } = useUserStore();
  const navigate = useNavigate();
  const clearUserIdStorage = useUserStore.persist.clearStorage;

  return (
    <header>
      {/* 헤더 높이 56px */}
      <div
        className="
      flex justify-between items-center	px-32	
      min-h-14 text-lg bg-slate-200 text-red-600	font-semibold	
      "
      >
        <Link to={HOME}>홈</Link>
        {user ? (
          <div className="flex gap-10">
            <span className="text-black">{user.nickname}</span>
            <button
              onClick={() => {
                setPageType("Profile");
                navigate(PROFILE);
              }}
            >
              프로필
            </button>
            <button
              onClick={() => {
                setPageType("Test");
                navigate(TEST);
              }}
            >
              테스트
            </button>
            <button
              onClick={() => {
                setPageType("TestResultPage");
                navigate(TEST_RESULT);
              }}
            >
              결과
            </button>
            <button
              onClick={() => {
                setUser(null);
                setIsLogin(false);
                clearUserIdStorage();
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link to={SING_IN}>로그인</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
