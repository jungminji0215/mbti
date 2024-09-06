import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { SING_IN } from "../utils/routes";

const SignUp = () => {
  const navigate = useNavigate();

  const signUp = async (userData) => {
    try {
      const response = await register(userData);
      if (response.success) navigate(SING_IN);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return <AuthForm onSubmit={signUp} />;
};

export default SignUp;
