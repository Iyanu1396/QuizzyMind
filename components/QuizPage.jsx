function QuizPage(props) {
  return (
    <div className="quiz-page">
      {/* <img className="blob-up" src={props.blobUp} alt="" /> */}
      <h2 className="question">{props.question.replace(/&quot;/g, '"')}</h2>
      <div className="options">
        <button className="option1">{props.answers[0]}</button>
        <button className="option2">{props.answers[1]}</button>
        <button className="option3">{props.answers[2]}</button>
        <button className="option4">{props.answers[3]}</button>
      </div>
      <div className="divider"></div>
      {/* <img className="blob-down" src={props.blobDown} alt="" /> */}
    </div>
  );
}

export default QuizPage;
