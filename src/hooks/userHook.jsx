import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { SING_IN } from "../utils/routes";

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
