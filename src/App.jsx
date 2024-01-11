import { useState, useEffect } from "react";

import "./App.css";
import StartPage from "../components/StartPage";
import QuizPage from "../components/QuizPage";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import arrayShuffle from "array-shuffle";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const [quizzes, setQuizzes] = useState([]);
  const [submitQuizzes, setSubmitQuizzes] = useState(false);
  const [restartQuizzes, setRestartQuizzes] = useState(false);

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
          answers: arrayShuffle([
            ...quiz.incorrect_answers,
            quiz.correct_answer,
          ]),
          correctAnswer: quiz.correct_answer,
          id: nanoid(),
          selectedAnswer: null,
          isCorrect: null,
          isAnswered: false,
        }));
        setQuizzes(questions);
      } catch (err) {
        alert(
          "Failed to load,kindly check your internet connection and try again"
        );
      }
    };

    getQuestions();
  }, [restartQuizzes]);

  const handleSelectedAnswer = function (selectedAnswer, id) {
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) => {
        return quiz.id === id
          ? { ...quiz, selectedAnswer: selectedAnswer }
          : quiz;
      })
    );
  };

  const handleSubmittedAnswers = function () {
    setSubmitQuizzes((prev) => !prev);
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) => {
        return quiz.selectedAnswer === quiz.correctAnswer
          ? { ...quiz, isAnswered: true, isCorrect: true }
          : { ...quiz, isAnswered: true, isCorrect: false };
      })
    );
  };

  const renderQuestion = quizzes.map((question) => (
    <QuizPage
      key={nanoid()}
      {...question}
      handleSelectedAnswer={handleSelectedAnswer}
      submitQuizzes={submitQuizzes}
    />
  ));

  function restartQuiz() {
    setRestartQuizzes((prevQuizzes) => !prevQuizzes);
    setSubmitQuizzes((prev) => !prev);
  }

  function countCorrectAns(quizzesArray) {
    let correctCount = 0;
    quizzesArray.forEach((quiz) => {
      if (quiz.isCorrect) {
        correctCount++;
      }
    });
    return correctCount;
  }

  const numberOfCorrectAnswers = countCorrectAns(quizzes);

  return (
    <main>
      {!startQuiz ? (
        <StartPage commenceQuiz={commenceQuiz} />
      ) : (
        <>
          {numberOfCorrectAnswers >= 3 && <Confetti />}
          {renderQuestion}
          {submitQuizzes ? (
            <div className="flex">
              <p>
                You scored {numberOfCorrectAnswers}/{quizzes.length} correct
                answers
              </p>{" "}
              <button onClick={restartQuiz} className="play-btn">
                Play again
              </button>
            </div>
          ) : (
            <button onClick={handleSubmittedAnswers} className="check-btn">
              Check Answers
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default App;
