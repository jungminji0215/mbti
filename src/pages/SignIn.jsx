import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

import AuthForm from "../components/AuthForm";
import { HOME } from "../utils/routes";
import useUserStore from "../zustand/userStore";

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.data.nickname);
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
