import React from "react";
import TestForm from "../components/TestForm";
import { useNavigate } from "react-router-dom";
import calculateMBTI from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import useUserStore from "../zustand/userStore";

const TestPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);

    const resultData = {
      userId: user?.userId,
      nickname: user?.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };

    await createTestResult(resultData);
    navigate("/results");
  };

  return <TestForm onSubmit={handleTestSubmit} />;
};

export default TestPage;
