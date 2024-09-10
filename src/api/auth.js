import authInstance from "../axiosinstance/authInstance";

// TODO 삭제
import { SING_IN, HOME } from "../utils/routes";
import { useNavigate } from "react-router-dom";

/** 회원가입 */
export const register = async (userData) => {
  return await authInstance.post("/register", userData);
};

/** 로그인 */
export const login = async (userData) => {
  return await authInstance.post("/login?expiresIn=1m", userData);
};

/** 회원정보 조회 */
export const getUserProfile = async (token) => {
  // const navigate = useNavigate();

  return await authInstance.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // .catch((error) => {
  //   if (error.response.data.message === TOKEN_ERROR) {
  //     console.log("getUserProfile error :>> ", error.response.data.message);
  //     navigate(HOME);
  //   }
  // });
};

/** 프로필 수정 */
export const updateProfile = async ({ nickname, token }) => {
  return await authInstance.patch(
    "/profile",
    { nickname: nickname },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
