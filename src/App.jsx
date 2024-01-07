import { useState, useEffect } from "react";
import blobDown from "./assets/down.svg";
import blobUp from "./assets/up.svg";

import "./App.css";
import StartPage from "../components/StartPage";
import QuizPage from "../components/QuizPage";
import { nanoid } from "nanoid";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const [quizzes, setQuizzes] = useState([]);

  const commenceQuiz = function () {
    setStartQuiz((prevState) => !prevState);
  };

  useEffect(() => {
    const getQuestions = async function () {
      try {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const data = await res.json();
        const questions = data.results.map((quiz) => ({
          question: quiz.question,
          answers: [...quiz.incorrect_answers, quiz.correct_answer],
          correctAnswer: quiz.correct_answer,
          id: nanoid(),
          selectedAnswer: null,
        }));
        setQuizzes(questions);
      } catch (err) {
        console.log(err.message);
      }
    };

    getQuestions();
  }, []);

  const handleSelectedAnswer = function (selectedAnswer, id) {
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) => {
        return quiz.id === id
          ? { ...quiz, selectedAnswer: selectedAnswer }
          : quiz;
      })
    );
  };

  console.log(quizzes);

  const renderQuestion = quizzes.map((question) => (
    <QuizPage
      key={nanoid()}
      {...question}
      handleSelectedAnswer={handleSelectedAnswer}
    />
  ));

  return (
    <main>
      {!startQuiz ? (
        <StartPage
          blobUp={blobUp}
          blobDown={blobDown}
          commenceQuiz={commenceQuiz}
        />
      ) : (
        <>
          {renderQuestion}
          <button className="check-btn">Check Answers</button>
        </>
      )}
    </main>
  );
}

export default App;
