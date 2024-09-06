import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem from "./TestResultItem.jsx";

const TestResultList = () => {
  const fetchTestResults = async () => {
    const { data } = await getTestResults();
    return data;
  };

  // 리액트 쿼리가 자동으로 원하는 데이터의 종류를 queryKey 에 들어있는 이름으로 캐싱을한다.
  const {
    data: testResults,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: fetchTestResults,
  });

  // TODO 로딩중이면 스피너
  return (
    <>
      {isPending
        ? "로딩중입니다!!!!!!!"
        : isError
        ? "에러"
        : testResults.map((testResult) => {
            return (
              <TestResultItem key={testResult.id} testResult={testResult} />
            );
          })}
    </>
  );
};

export default TestResultList;
