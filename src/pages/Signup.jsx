import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

const SignUp = () => {
  const signUp = () => {
    console.log("회원가입 기능 시작");
    const userData = {
      id: id,
      password: password,
      nickname: nickname,
    };

    try {
      const response = register(userData);
    } catch (error) {}
  };

  console.log(typeof signUp);

  return <AuthForm onSubmit={signUp} mode={"signup"} />;
};

export default SignUp;
