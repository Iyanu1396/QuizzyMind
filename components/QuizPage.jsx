import React, { useState } from "react";

function QuizPage(props) {
  return (
    <div className="quiz-page">
      <h2 className="question">
        {props.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
      </h2>
      <div className="options">
        {props.answers.map((answer, index) => (
          <button
            key={index}
            className={`option${index + 1} 
              
              ${
                props.selectedAnswer === answer &&
                props.selectedAnswer !== props.correctAnswer &&
                props.isCorrect === false
                  ? "wrong"
                  : ""
              } 
            ${
              props.correctAnswer === answer && props.isAnswered
                ? "correct"
                : ""
            } 
            ${props.selectedAnswer === answer ? "selected" : ""}
            `}
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
