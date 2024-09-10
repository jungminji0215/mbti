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
    <div className=" flex justify-center items-center h-full">
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => {
          return (
            <div className="mb-8" key={q.id}>
              <p>{q.question}</p>
              {q.options.map((option, i) => {
                return (
                  <label key={i}>
                    <input
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
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
};

export default TestForm;
