import React, { useState, useRef, useEffect } from "react";
import useUserStore from "../zustand/userStore.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../api/auth.js";
import ProfileItem from "../components/profile/ProfileItem.jsx";
import { useOutletContext } from "react-router-dom";
import useAuthStore from "../zustand/useAuthStore.js";

//
const Profile = () => {
  // const { isLogin, setIsLogin } = useOutletContext();
  // console.log("isLogin :>> ", isLogin);

  /** 회원 정보 조회 */
  const { user, token } = useUserStore();

  const fetchTestResults = async () => {
    const { data } = await getUserProfile(user.accessToken);
    return data;
  };

  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: fetchTestResults,
  });
  /** 회원 정보 조회 */

  return <ProfileItem userInfo={user} token={token} />;
};

export default Profile;
