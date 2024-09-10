/** react 라이브러리 */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

/** 상태관리 */
import useUserStore from "../../zustand/userStore";

import { PROFILE, TEST_RESULT, TEST, SING_IN, HOME } from "../../utils/routes";

const Header = () => {
  const { user } = useUserStore();

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
            <Link to={PROFILE}>프로필</Link>
            <Link to={TEST}>테스트</Link>
            <Link to={TEST_RESULT}>결과</Link>
            <button
              onClick={() => {
                localStorage.removeItem("userInfo");
                window.location.href = HOME;
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
