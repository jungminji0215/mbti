import React, { useState, useRef, useEffect } from "react";
import useUserStore from "../../zustand/userStore.js";
import { useUpdateProfile } from "../../hooks/userProfileHook.jsx";

const ProfileItem = ({ userInfo }) => {
  const { user } = useUserStore();

  const [isEditMode, setIsEditMode] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(userInfo.nickname);

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
  const { mutate } = useUpdateProfile();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    mutate({ nickname: nicknameInput, token: user.accessToken });
    setIsEditMode(false);
  };

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
