import React from 'react';
import "../css/QuestionCounterAndTimer.css";
import QuestionCounter from './QuestionCounter';
import QuestionTimer from './QuestionTimer';

const QuestionCounterAndTimer = ({currentQuestion, allQuizData, seconds}) => { 
    return (
        <div className="counter-and-timer-container"> 
            <div>
                <QuestionCounter currentQuestion={currentQuestion} allQuizData={allQuizData}/>
            </div>
            <div>
                <QuestionTimer seconds={seconds}/>
            </div>
        </div>
    ) 
}

export default QuestionCounterAndTimer;