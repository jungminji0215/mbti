import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// 로그인
export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

// 회원정보 조회
export const getUserProfile = async (token) => {
  return await axios.get(`${API_URL}/login`, {
    headers: {
      Authorization: token,
    },
  });
};

// 프로필 수정
export const updateProfile = async (formData) => {};
