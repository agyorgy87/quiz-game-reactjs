import React from 'react';
import "../css/QuestionCounterAndTimer.css";

const QuestionCounter = ({currentQuestion, allQuizData}) => {
  return (
    <div className="question-counter-container">
        <p>{currentQuestion + 1}/{allQuizData.length}</p>
    </div>
  )
}

export default QuestionCounter;