import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import blobDown from "./assets/down.svg";
import blobUp from "./assets/up.svg";

import "./App.css";
import StartPage from "../components/StartPage";
import QuizPage from "../components/QuizPage";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const commenceQuiz = function () {
    setStartQuiz((prevState) => !prevState);
  };

  return (
    <main>
      {!startQuiz ? (
        <StartPage
          blobUp={blobUp}
          blobDown={blobDown}
          commenceQuiz={commenceQuiz}
        />
      ) : (
        <QuizPage />
      )}
    </main>
  );
}

export default App;
