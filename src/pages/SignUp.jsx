/** 리액트 라이브러리 */
import React from "react";

/** 커스텀 훅 */
import { useSignUp } from "../hooks/userAuthHook";

import AuthForm from "../components/AuthForm";

/** 회원가입 */
const SignUp = () => {
  /**
    const { mutate } = useSignUp();
    
    const signUp = (userData) => {
    mutate(userData);
  };
   */

  const { mutate: signUp } = useSignUp();

  return <AuthForm onSubmit={signUp} />;
};

export default SignUp;
