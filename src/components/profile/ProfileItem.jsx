import React, { useState, useRef, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../../api/auth.js";

const ProfileItem = ({ userInfo }) => {
  const queryClient = useQueryClient();
  const [isEditMode, setIsEditMode] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(userInfo.nickname);
  const token = localStorage.getItem("accessToken");

  const nicknameRef = useRef("");

  const changeMode = () => {
    setIsEditMode(true);
  };

  useEffect(() => {
    if (isEditMode) nicknameRef.current.focus();
  }, [isEditMode]);

  /** 프로필 업데이트 */
  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      //   // TODO 이거 변경 (질문하기)
      //   updateNickname(data.data.nickname);
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
    <div>
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
