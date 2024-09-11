import React, { useEffect } from "react";

/** 커스텀 훅 */
import { useGetMbtiTest } from "../hooks/mbtiTestHook";

import TestResultList from "../components/TestResultList";
import useUserStore from "../zustand/userStore";

const TestResultPage = () => {
  const { data: testResults, isPending, isError } = useGetMbtiTest();

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
