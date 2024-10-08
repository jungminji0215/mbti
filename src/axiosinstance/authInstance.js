import axios from "axios";
import { HOME } from "../utils/routes";

const TOKEN_ERROR = "토큰이 만료되었습니다. 다시 로그인 해주세요.";

const authInstance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

/*
TODO 여기로 공통헤터 토큰 설정하면 좋을듯
authInstance.interceptors.request.use((config) => {
  return config;
});
*/

/**  
 * MEMO : 토큰 오류 -> 처음 해결해본 방식
authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data.message === TOKEN_ERROR) {
      localStorage.removeItem("userInfo"); // 로컬 스토리지에서 데이터 삭제
      alert("로그인 기간이 만료되었습니다. 다시 로그인해주세요.");
      window.location.href = HOME;
    }

    return Promise.reject(error);
  }
);
*/

export default authInstance;
