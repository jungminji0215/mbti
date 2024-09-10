import React from "react";
import useUserStore from "../zustand/userStore.js";
import ProfileItem from "../components/profile/ProfileItem.jsx";
import { useGetProfile } from "../hooks/userProfileHook.jsx";

const Profile = () => {
  const { user } = useUserStore();

  const {
    data: userInfo,
    isPending,
    isError,
  } = useGetProfile(user.accessToken);

  return (
    <>
      {isPending ? (
        "로딩중입니다...."
      ) : isError ? (
        "에러가 발생했습니다."
      ) : (
        <ProfileItem userInfo={userInfo.data} />
      )}
    </>
  );
};

export default Profile;
