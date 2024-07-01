import React from 'react';
import "../css/QuizGame.css";
import { useNavigate } from "react-router-dom";


const ResultText = ({finalText, allQuizData, scores}) => {

    let navigate = useNavigate();



    return (
        <div className="final-text">
            {finalText}          
                <div className="score-container">
                    {allQuizData.length}-ból {scores} Pontszámot értél el.
                </div>
                <div className="button-container">
                    <button 
                    className="backtohome-button"
                    onClick={()=> navigate("/")}
                    >
                    VISSZA A FŐMENÜBE
                    </button>
                </div>
        </div>
    )
}

export default ResultText;