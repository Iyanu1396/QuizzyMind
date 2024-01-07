import React, { useState } from "react";

function QuizPage(props) {
  const [answeredIndex, setAnsweredIndex] = useState(null);
  const handleClick = function (index) {
    setAnsweredIndex(index);
  };

  // function generateUniqueRandomNumbers(count, maxRange) {
  //   const uniqueNumbers = new Set();

  //   while (uniqueNumbers.size < count) {
  //     const randomNumber = Math.floor(Math.random() * (maxRange + 1));
  //     uniqueNumbers.add(randomNumber);
  //   }

  //   return Array.from(uniqueNumbers);
  // }

  // const numberOfUniqueNumbers = 4;
  // const maxRange = 3;

  // const uniqueRandomNumbers = generateUniqueRandomNumbers(
  //   numberOfUniqueNumbers,
  //   maxRange
  // );

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
              backgroundColor: answeredIndex === index ? "#D6DBF5" : "",
            }}
            className={`option ${index + 1}`}
            onClick={() => handleClick(index)}
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
