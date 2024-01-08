import React, { useState } from "react";
import he from "he";

function QuizPage(props) {
  return (
    <div className="quiz-page">
      <h2 className="question">{he.decode(props.question)}</h2>
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
            onClick={
              !props.submitQuizzes
                ? () => props.handleSelectedAnswer(answer, props.id)
                : null
            }
          >
            {he.decode(answer)}
          </button>
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default QuizPage;
