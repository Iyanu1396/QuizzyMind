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
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();
      const questions = data.results.map((quiz) => ({
        question: quiz.question,
        answers: [...quiz.incorrect_answers, quiz.correct_answer],
        correctAnswer: quiz.correct_answer,
        id: nanoid(),
        isAnswered: false,
      }));
      setQuizzes(questions);
    };

    getQuestions();
  }, []);

  const renderQuestion = quizzes.map((question) => (
    <QuizPage key={nanoid()} {...question} />
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
        renderQuestion
      )}
    </main>
  );
}

export default App;
