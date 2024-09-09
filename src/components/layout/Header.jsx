import React from "react";
import { Link } from "react-router-dom";
import { PROFILE, TEST_RESULT, TEST, SING_IN, HOME } from "../../utils/routes";
import useUserStore from "../../zustand/userStore";

const Header = () => {
  const { user } = useUserStore();

  return (
    <header>
      <Link to={HOME}>홈</Link>
      {user ? (
        <>
          <span>{user?.nickname}</span>
          <Link to={PROFILE}>프로필</Link>
          <Link to={TEST}>테스트</Link>
          <Link to={TEST_RESULT}>결과</Link>
          <button>로그아웃</button>
        </>
      ) : (
        <Link to={SING_IN}>로그인</Link>
      )}
    </header>
  );
};

export default Header;
