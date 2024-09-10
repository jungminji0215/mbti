import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  /** 제출하기 */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <div className=" flex flex-col justify-center items-center p-16	">
      <h2 className="font-semibold text-3xl mb-10">MBTI 테스트</h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        {questions.map((q, index) => {
          return (
            <div
              className="mb-8 text-left w-full border-solid border-2 p-3 rounded-lg  border-rose-500"
              key={q.id}
            >
              <p className="mb-4">{q.question}</p>
              {q.options.map((option, i) => {
                return (
                  <label className="mr-4 " key={i}>
                    <input
                      className="mr-1 "
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleChange(index, option)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          );
        })}
        <button
          className="border-solid border-2 p-3 rounded-lg  border-rose-500 w-48 "
          type="submit"
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default TestForm;
