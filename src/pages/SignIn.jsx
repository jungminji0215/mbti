import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useUserStore from "../zustand/userStore";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { HOME } from "../utils/routes";
import useAuthStore from "../zustand/useAuthStore";

// 새로고침 : persist
const SignIn = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useUserStore();
  const { setIsLogin } = useAuthStore();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data.data);
      setIsLogin(true);
      setUser(data.data);

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
