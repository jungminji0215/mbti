import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

/** 상태관리 */
// import useAuthStore from "../zustand/useAuthStore";
import useUserStore from "../zustand/userStore";

import { register, login } from "../api/auth";
import { SING_IN, HOME } from "../utils/routes";

/** 회원가입 */
export const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert("회원가입 완료");
      navigate(SING_IN);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });
};

/** 로그인 */
export const useSignIn = () => {
  const { setUser, setIsLogin } = useUserStore();
  // const { setIsLogin } = useAuthStore();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // 로그인 여부
      setIsLogin(true);

      // 유저 정보
      setUser(data.data);

      navigate(HOME);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });
};
