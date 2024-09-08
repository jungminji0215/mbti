import React from "react";
import { Link } from "react-router-dom";
import { PROFILE, TEST_RESULT, TEST, SING_IN, HOME } from "../../utils/routes";
import useAuthStore from "../../zustand/useAuthStore";
import useUserStore from "../../zustand/userStore";

// TODO header 에서 이름 가져오고, 수정해도 자동으로 변경되도록 하는 방법
const Header = () => {
  /** MEMO
   * Header 컴포넌트에서는 useAuthStore의 isAuthenticated 상태를 '구독'하고 있음
   * setAuthenticated가 호출되면 자동으로 상태가 업데이트되고 UI가 갱신된다.
   * useAuthStore의 isAuthenticated 값이 변경될 때마다 Header 컴포넌트가 리렌더링된다!!
   */
  const { isAuthenticated } = useAuthStore();

  return (
    <header>
      <Link to={HOME}>홈</Link>
      {isAuthenticated ? (
        <>
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
