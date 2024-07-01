import React from 'react';
import "../css/QuizGame.css";

const QuestionText = ({allQuizData, currentQuestion}) => {
    return (
        <div className="question-text">
            {allQuizData[currentQuestion].questionText}
        </div> 
    )
}

export default QuestionText;