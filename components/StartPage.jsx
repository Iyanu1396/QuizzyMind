function StartPage(props) {
  return (
    <div className="start-page">
      <div className="container">
        <h1>Quizzy Mind</h1>
        <p>
          QuizzyMind offers an interactive journey through captivating quizzes.
          Fuel your curiosity, enhance your learning, and enjoy an immersive
          experience that combines entertainment with valuable insights. Start
          the quiz and unleash your intellect!
        </p>

        <button className="start-btn " onClick={() => props.commenceQuiz()}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default StartPage;
