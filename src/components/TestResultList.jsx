import React from "react";
import useUserStore from "../zustand/userStore";

import TestResultItem from "./TestResultItem.jsx";

const TestResultList = ({ testResults }) => {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col	 justify-center items-center h-full">
      <h2>모든 테스트 결과</h2>
      {testResults
        .filter((testResult) => {
          return testResult.visibility || testResult.userId === user.id;
        })
        .map((testResult) => {
          return <TestResultItem key={testResult.id} testResult={testResult} />;
        })}
    </div>
  );
};

export default TestResultList;
