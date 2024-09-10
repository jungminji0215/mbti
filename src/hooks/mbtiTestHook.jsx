import { getTestResults } from "../api/testResults";
import { useQuery } from "@tanstack/react-query";

export const useGetMbtiTest = () => {
  return useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
    select: (data) => data.data, // 응답에서 data만 선택
  });
};
