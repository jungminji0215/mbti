import React from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import useUserStore from "../zustand/userStore";
import useAuthStore from "../zustand/useAuthStore";

import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { HOME } from "../utils/routes";

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
