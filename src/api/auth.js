import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

/**
 * 회원가입 실패
  {
    "message": "이미 존재하는 유저 id입니다."
  }
 */

/**
   * 회원가입 설공
  {
    "message": "회원가입 완료",
    "success": true
  }
   */

export const register = async (userData) => {
  console.log("userData :>> ", userData);

  // const response = await axios.post(`${API_URL}/register`, userData);
  // return response.data;
};
