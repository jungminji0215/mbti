import React from "react";
import AuthForm from "../components/AuthForm";

const SignIn = () => {
  const signIn = () => {
    console.log("로그인 기능 시작");
  };

  return <AuthForm mode={"signIn"} onSubmit={signIn} />;
};

export default SignIn;
