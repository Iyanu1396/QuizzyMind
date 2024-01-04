function StartPage(props) {
  console.log(props);
  return (
    <div className="start-page">
      <img className='blog-up' src={props.blobUp} alt="" />

      <h1>Quizzy Mind</h1>
      <p>
        QuizzyMind offers an interactive journey through captivating quizzes.
        Fuel your curiosity, enhance your learning, and enjoy an immersive
        experience that combines entertainment with valuable insights. Start the
        quiz and unleash your intellect!
      </p>
      <button className="start-btn">Start Quiz</button>
      <img className="blog-down" src={props.blobDown} alt="" />
    </div>
  );
}

export default StartPage;
