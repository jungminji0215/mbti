import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { HOME } from "../utils/routes";
import useUserStore from "../zustand/userStore";
import useAuthStore from "../zustand/useAuthStore";

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { setAuthenticated } = useAuthStore();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("로그인 데이터 :>> ", data.data);
      setUser(data.data);
      localStorage.setItem("accessToken", data.data.accessToken);
      setAuthenticated(true);
      navigate(HOME);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const signIn = async (userData) => {
    mutate(userData);
  };

  return <AuthForm mode={"signIn"} onSubmit={signIn} />;
};

export default SignIn;
