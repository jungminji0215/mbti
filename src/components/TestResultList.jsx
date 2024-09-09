import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem from "./TestResultItem.jsx";
import useUserStore from "../zustand/userStore";

const TestResultList = ({ testResults }) => {
  const { user } = useUserStore();

  return (
    <>
      <h2>모든 테스트 결과</h2>
      {testResults
        .filter((testResult) => {
          return testResult.visibility || testResult.userId === user.id;
        })
        .map((testResult) => {
          return <TestResultItem key={testResult.id} testResult={testResult} />;
        })}
    </>
  );
};

export default TestResultList;
