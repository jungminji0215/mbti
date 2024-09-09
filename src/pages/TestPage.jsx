import React from "react";
import TestForm from "../components/TestForm";
import { useNavigate } from "react-router-dom";
import calculateMBTI from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import useUserStore from "../zustand/userStore";
import { useMutation } from "@tanstack/react-query";
import { TEST_RESULT } from "../utils/routes";

const TestPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const { mutate } = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      navigate(TEST_RESULT);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

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
