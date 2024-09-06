import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { SING_IN } from "../utils/routes";

const SignUp = () => {
  const navigate = useNavigate();

  // TODO 로그인 회원가입은 tanstack query 사용못하나?
  // const fetchSignUp = async () => {
  //   const { data } = await register(userData);
  //   return data;
  // };

  // const { mutate } = useMutation({
  //   mutationFn: fetchSignUp,
  //   onSuccess: () => {
  //     alert("회원가입 완료");
  //   },
  // });

  // const signUp = async (userData) => {
  //   console.log("df");
  //   mutate(userData);
  // };

  const signUp = async (userData) => {
    try {
      const { data } = await register(userData);
      if (data.success) navigate(SING_IN);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return <AuthForm onSubmit={signUp} />;
};

export default SignUp;
