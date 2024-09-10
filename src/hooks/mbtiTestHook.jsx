import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { TEST_RESULT } from "../utils/routes";
import { useNavigate } from "react-router-dom";

/** 테스트 결과 조회 */
export const useGetMbtiTest = () => {
  return useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
    select: (data) => data.data, // 응답에서 data만 선택
  });
};

/** 테스트 결과 생성 */
export const useMbitTest = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      navigate(TEST_RESULT);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

/** 결과 데이터 삭제 */
export const useDeleteTestResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      console.error("Delete failed:", error);
      alert("Delete failed. Please try again.");
    },
  });
};

/** 보이기 설정 */
export const useToggleVisibility = (id, newVisibility) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => updateTestResultVisibility(id, newVisibility),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};
