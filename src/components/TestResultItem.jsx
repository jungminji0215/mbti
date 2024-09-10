import React from "react";
import useUserStore from "../zustand/userStore";
import { mbtiDescriptions } from "../utils/mbtiDescriptions";
import {
  useDeleteTestResult,
  useToggleVisibility,
} from "../hooks/mbtiTestHook";

const TestResultItem = ({ testResult }) => {
  const { user } = useUserStore();

  /** 삭제 */
  const deleteTestResult = useDeleteTestResult();

  /** 노출 변경 */
  const toggleVisibility = useToggleVisibility(
    testResult.id,
    !testResult.visibility
  );

  return (
    <div>
      <span>{testResult.nickname}</span>
      <span>{new Date(testResult.date).toLocaleString()}</span>
      <span>{testResult.mbti}</span>
      <span>{mbtiDescriptions[testResult.mbti]}</span>
      {testResult.userId === user.id ? (
        <>
          <button onClick={() => toggleVisibility.mutate()}>
            {testResult.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button onClick={() => deleteTestResult.mutate(testResult.id)}>
            삭제
          </button>
        </>
      ) : null}
    </div>
  );
};

export default TestResultItem;
