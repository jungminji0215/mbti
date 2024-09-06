import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

import AuthForm from "../components/AuthForm";
import { HOME } from "../utils/routes";

const SignIn = () => {
  const navigate = useNavigate();

  const signIn = async (userData) => {
    try {
      const { data } = await login(userData);
      if (data.success) navigate(HOME);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return <AuthForm mode={"signIn"} onSubmit={signIn} />;
};

export default SignIn;
