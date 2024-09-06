import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth";
import SignUp from "../pages/Signup";
import { SING_UP } from "../utils/routes";

// 회원가입
// 로그인
const AuthForm = ({ onSubmit, mode }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          type={"password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <input
          type={"text"}
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
        />

        {mode === "signIn" ? (
          <>
            <button type="submit">로그인</button>
            <Link to={SING_UP}>회원가입 하러가기</Link>
          </>
        ) : (
          <button type="submit">회원가입</button>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
