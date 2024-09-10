/** 리액트 라이브러리 */
import React from "react";

/** 커스텀 훅 */
import { useSignIn } from "../hooks/userAuthHook";

import AuthForm from "../components/AuthForm";

const SignIn = () => {
  const { mutate: signIn } = useSignIn();
  return <AuthForm mode={"signIn"} onSubmit={signIn} />;
};

export default SignIn;
