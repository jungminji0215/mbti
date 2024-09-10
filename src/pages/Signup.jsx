/** 리액트 라이브러리 */
import React from "react";

/** 커스텀 훅 */
import { useSignUp } from "../hooks/userHook";

import AuthForm from "../components/AuthForm";

const SignUp = () => {
  const { mutate } = useSignUp();

  const signUp = (userData) => {
    mutate(userData);
  };

  return <AuthForm onSubmit={signUp} />;
};
export default SignUp;
