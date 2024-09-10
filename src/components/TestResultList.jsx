import React from "react";
import useUserStore from "../zustand/userStore";

import TestResultItem from "./TestResultItem.jsx";

const TestResultList = ({ testResults }) => {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col	 justify-center items-center p-16">
      <h2 className="font-semibold text-3xl mb-10">모든 테스트 결과</h2>
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
