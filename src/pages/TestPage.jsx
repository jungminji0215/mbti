import React from "react";
import TestForm from "../components/TestForm";
import calculateMBTI from "../utils/mbtiCalculator";
import useUserStore from "../zustand/userStore";
import { useMbitTest } from "../hooks/mbtiTestHook";

const TestPage = () => {
  const { user } = useUserStore();

  const { mutate } = useMbitTest();

  /** 테스트 제출 */
  const handleTestSubmit = async (answers) => {
    const mbti = calculateMBTI(answers);

    const resultData = {
      userId: user?.id,
      nickname: user?.nickname,
      mbti,
      date: new Date().toISOString(),
      visibility: true,
    };

    mutate(resultData);
  };

  return <TestForm onSubmit={handleTestSubmit} />;
};

export default TestPage;
