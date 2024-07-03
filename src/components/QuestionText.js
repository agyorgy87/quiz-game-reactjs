import React from 'react';
import "../css/QuestionText.css";

const QuestionText = ({allQuizData, currentQuestion}) => { 
    return (
        <div className="question-text-container">
            <p>{allQuizData[currentQuestion].questionText}</p>
        </div> 
    )
}

export default QuestionText;