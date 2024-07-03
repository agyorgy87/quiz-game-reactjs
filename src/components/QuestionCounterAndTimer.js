import React from 'react';
import "../css/QuestionCounterAndTimer.css";

const QuestionCounterAndTimer = ({currentQuestion, allQuizData, seconds}) => { 
    return (
        <div className="count-counter-container">
            <div className="question-count-container">
                <span> {currentQuestion + 1}</span>/{allQuizData.length}
            </div>
            <div className="question-counter-container">
                {seconds}
            </div>
        </div>
    ) 
}

export default QuestionCounterAndTimer;