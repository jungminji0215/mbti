import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { SING_IN } from "../utils/routes";

const SignUp = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert("회원가입 완료");
      navigate(SING_IN);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const signUp = (userData) => {
    mutate(userData);
  };

  return <AuthForm onSubmit={signUp} />;
};

export default SignUp;
