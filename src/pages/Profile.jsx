import React, { useState, useRef, useEffect } from "react";
import useUserStore from "../zustand/userStore.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../api/auth.js";
import ProfileItem from "../components/profile/ProfileItem.jsx";

const Profile = () => {
  /** 회원 정보 조회 */
  const token = localStorage.getItem("accessToken");
  console.log("로컬스토리지 token :>> ", token);

  const fetchTestResults = async () => {
    const { data } = await getUserProfile(token);
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

  return (
    <div>
      {isPending ? (
        "로딩중입니다...."
      ) : isError ? (
        "에러가 발생했습니다."
      ) : (
        <ProfileItem userInfo={userInfo} />
      )}
    </div>
  );
};

export default Profile;
