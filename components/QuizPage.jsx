function QuizPage(props) {
  return (
    <div className="quiz-page">
      {/* <img className="blob-up" src={props.blobUp} alt="" /> */}
      <h2 className="question">How would one say goodbye in Spanish?</h2>
      <div className="options">
        <button className="option1">Adiós</button>
        <button className="option2">Hola</button>
        <button className="option3">Au Revoir</button>
        <button className="option4">Salir</button>
      </div>
      <div className="divider"></div>
      {/* <img className="blob-down" src={props.blobDown} alt="" /> */}
    </div>
  );
}

export default QuizPage;
