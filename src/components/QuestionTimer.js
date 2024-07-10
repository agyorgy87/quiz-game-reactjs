import React from 'react';
import "../css/QuestionCounterAndTimer.css";

const QuestionTimer = ({seconds}) => {
  return (
    <div className="question-timer-container">
        {seconds}
    </div>
  )
}

export default QuestionTimer;