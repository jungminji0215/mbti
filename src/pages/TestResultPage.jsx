import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTestResults } from "../api/testResults";

import TestResultList from "../components/TestResultList";

const TestResultPage = () => {
  const fetchTestResults = async () => {
    const { data } = await getTestResults();
    return data;
  };

  const {
    data: testResults,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: fetchTestResults,
  });

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
