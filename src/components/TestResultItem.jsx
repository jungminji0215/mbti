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
    <div
      className="mb-8 text-left  border-solid border-2 p-3 rounded-lg  border-rose-500
    flex flex-col gap-5 w-2/5	"
    >
      <div className="flex justify-between">
        <span>{testResult.nickname}</span>
        <span>{new Date(testResult.date).toLocaleString()}</span>
      </div>

      <span>{testResult.mbti}</span>
      <span>{mbtiDescriptions[testResult.mbti]}</span>
      {testResult.userId === user.id ? (
        <>
          <button
            className="border-solid border-2 p-3 rounded-lg  border-rose-500"
            onClick={() => toggleVisibility.mutate()}
          >
            {testResult.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            className="border-solid border-2 p-3 rounded-lg  border-rose-500"
            onClick={() => deleteTestResult.mutate(testResult.id)}
          >
            삭제
          </button>
        </>
      ) : null}
    </div>
  );
};

export default TestResultItem;
