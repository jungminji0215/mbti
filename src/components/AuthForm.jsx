import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SING_UP } from "../utils/routes";

/** 회원가입&로그인 form */
const AuthForm = ({ onSubmit, mode }) => {
  const [userData, setUserData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  /** 회원가입 & 로그인 */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  /** 유저 정보 세팅 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        className="flex flex-col justify-center	items-center gap-5 "
        onSubmit={handleSubmit}
      >
        <input
          className="w-80 min-h-14 bg-sky-200	"
          type={"text"}
          name="id"
          value={userData.id}
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          className="w-80 min-h-14 bg-sky-200	"
          type={"password"}
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />

        {mode === "signIn" ? (
          <>
            <button className="w-80 min-h-14 bg-sky-200	" type="submit">
              로그인
            </button>
            <Link to={SING_UP}>회원가입 하러가기</Link>
          </>
        ) : (
          <>
            <input
              className="w-80 min-h-14 bg-sky-200	"
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
