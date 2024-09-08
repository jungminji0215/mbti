import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTestResults } from "../api/testResults";

import TestResultList from "../components/TestResultList";

const TestResultPage = () => {
  const fetchTestResults = async () => {
    const { data } = await getTestResults();
    return data;
  };

  // 리액트 쿼리가 자동으로 원하는 데이터의 종류를
  // queryKey 에 들어있는 이름으로 캐싱을한다.
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
      {isPending ? (
        "로딩중입니다. 조금만 기다려주세요."
      ) : isError ? (
        "데이터를 조회하는 도중 오루가 발생했습니다."
      ) : (
        <TestResultList testResults={testResults} />
      )}
    </>
  );
};

export default TestResultPage;
