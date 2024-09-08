import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem from "./TestResultItem.jsx";
import useUserStore from "../zustand/userStore";

const TestResultList = ({ testResults }) => {
  const { user } = useUserStore();

  //TODO 나의 테스트 결과 따로 빼기
  // useEffect(() => {
  //   if (user) {
  //     const myTest = testResults.find((testResult) => {
  //       return testResult.id === user.id;
  //     });
  //     console.log("myTest :>> ", myTest);
  //   }
  // }, []);

  return (
    <>
      {/* <h2>나의 테스트 결과</h2>
      <TestResultItem key={myTest.id} testResult={myTest} />; */}

      <h2>모든 테스트 결과</h2>
      {testResults
        .filter((testResult) => {
          return testResult.isOpen === "true";
        })
        .map((testResult) => {
          return <TestResultItem key={testResult.id} testResult={testResult} />;
        })}
    </>
  );
};

export default TestResultList;
