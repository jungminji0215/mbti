import React from "react";

const TestResultItem = ({ testResult }) => {
  console.log("testResult :>> ", testResult);
  return (
    <div>
      <span>{testResult.nickname}</span>
      <span>{testResult.date}</span>
      <span>{testResult.mbti}</span>
      <span>{testResult.description}</span>
      <br />
      <br />
      <br />
    </div>
  );
};

export default TestResultItem;
