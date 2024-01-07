import React, { useState } from "react";

function QuizPage(props) {
  const [answeredIndex, setAnsweredIndex] = useState(null);

  const handleClick = function (index) {
    setAnsweredIndex(index);
  };

  return (
    <div className="quiz-page">
      <h2 className="question">
        {props.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
      </h2>
      <div className="options">
        {props.answers.map((answer, index) => (
          <button
            key={index}
            style={{
              backgroundColor: props.selectedAnswer === answer ? "#D6DBF5" : "",
            }}
            className={`option ${index + 1}`}
            onClick={() => props.handleSelectedAnswer(answer, props.id)}
          >
            {answer}
          </button>
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default QuizPage;
