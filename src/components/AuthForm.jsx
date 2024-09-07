import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SING_UP } from "../utils/routes";

const AuthForm = ({ onSubmit, mode }) => {
  const [userData, setUserData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  // 회원가입 & 로그인
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="id"
          value={userData.id}
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          type={"password"}
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />

        {mode === "signIn" ? (
          <>
            <button type="submit">로그인</button>
            <Link to={SING_UP}>회원가입 하러가기</Link>
          </>
        ) : (
          <>
            <input
              type={"text"}
              name="nickname"
              value={userData.nickname}
              onChange={handleChange}
              placeholder="닉네임"
            />
            <button type="submit">회원가입</button>
          </>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
