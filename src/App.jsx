import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import blobDown from "./assets/down.svg";
import blobUp from "./assets/up.svg";

import "./App.css";
import StartPage from "../components/StartPage";
import QuizPage from "../components/QuizPage";
import { nanoid } from "nanoid";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const [quizzesData, setQuizzesData] = useState([]);

  useEffect(() => {
    const getQuestions = async function () {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();
      setQuizzesData(data.results);
    };

    getQuestions();
  }, [startQuiz]);

  const commenceQuiz = function () {
    setStartQuiz((prevState) => !prevState);
  };

  const questions = quizzesData.map((quiz) => ({
    question: quiz.question,
    answers: [...quiz.incorrect_answers, quiz.correct_answer],
    correctAnswer: quiz.correct_answer,
    id: nanoid(),
  }));

  const renderQuestion = questions.map((question) => (
    <QuizPage key={nanoid()} {...question} />
  ));

  console.log(questions)


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
