import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../api/auth";
import useUserStore from "../zustand/userStore";

const TOKEN_ERROR = "토큰이 만료되었습니다. 다시 로그인 해주세요.";

/** 회원정보 조회 */
export const useGetProfile = (token) => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserProfile(token),
  });
};

/** 프로필 수정 */
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { updateNickname } = useUserStore();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      updateNickname(data.data.nickname);
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error) => {
      if (error.response.data.message === TOKEN_ERROR) {
        return;
      }
      alert(error.response.data.message);
    },
  });
};
