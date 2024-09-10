import React, { useState, useRef, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../../api/auth.js";
import useUserStore from "../../zustand/userStore.js";

const ProfileItem = ({ userInfo, token }) => {
  console.log("userInfo :>> ", userInfo);
  const queryClient = useQueryClient();

  const [isEditMode, setIsEditMode] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(userInfo.nickname);

  const { updateNickname } = useUserStore();

  /** 자동 포커스 */
  const nicknameRef = useRef("");
  useEffect(() => {
    if (isEditMode) nicknameRef.current.focus();
  }, [isEditMode]);

  /** mod 변경 (수정모드, 읽기모드) */
  const changeMode = () => {
    setIsEditMode(true);
  };

  /** 프로필 업데이트 */
  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      updateNickname(data.data.nickname);
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    mutate({ nickname: nicknameInput, token: token });
    setIsEditMode(false);
  };
  /** 프로필 업데이트 */

  return (
    <div className="flex flex-col	 justify-center items-center h-full gap-10">
      {isEditMode ? (
        <>
          <span>{userInfo.nickname}</span>
          <form onSubmit={handleUpdateProfile}>
            <input
              ref={nicknameRef}
              onChange={(e) => setNicknameInput(e.target.value)}
              value={nicknameInput}
            />
            <button type="submit">수정</button>
          </form>
        </>
      ) : (
        <>
          <span>{userInfo.nickname}</span>
          <button onClick={changeMode}>프로필 수정하기</button>
        </>
      )}
    </div>
  );
};

export default ProfileItem;
