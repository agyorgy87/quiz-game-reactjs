import { useState, useEffect } from 'react';
import "../css/QuizGame.css";
import { useNavigate } from "react-router-dom";
import hunLangQuiz from '../json/hunLangQuiz.json';
import engLangQuiz from '../json/engLangQuiz.json';
import internationalLanguage from '../json/internationalLanguage.json';


const ResultText = ({language, allQuizData, scores, result}) => {

    const [finalText, setFinalText] = useState("")

    let navigate = useNavigate();

    useEffect(() => {
        if(result === true) {
            resultAnnouncement();
        }
    },[result])

    /*
    const resultAnnouncement = () => {
        if(allQuizData === engLangQuiz) {
            if(scores === 0) {
                setFinalText("0 point :( Try again!");
            } else if(scores > 0 && scores <= 5) {
                setFinalText("Not bad, Try again :)");
            } else if(scores > 4 && scores < 6) {
                setFinalText("Congratulations! :)");
            } else if(scores === 8) {
                setFinalText("Perfect! you really know everything!");
            }
        } else if(allQuizData === hunLangQuiz) {
            if(scores === 0) {
                setFinalText("0 pont :( Próbáld meg újra!");
            } else if(scores > 0 && scores <= 5) {
                setFinalText("Nem rossz, próbáld meg újra :)");
            } else if(scores > 4 && scores < 6) {
                setFinalText("Gratulálok! :)");
            } else if(scores === 8) {
                setFinalText("Lenyűgöző! te tényleg mindent tudsz!");
            }
        }
    }
    */

    const resultAnnouncement = () => {
        const langData = internationalLanguage[language]
        if(langData) {
            if (scores === 0) {
                setFinalText(langData.finalTexts["0"]);
            } else if (scores > 0 && scores <= 5) {
                setFinalText(langData.finalTexts["1-5"]);
            } else if (scores > 5 && scores < 8) {
                setFinalText(langData.finalTexts["6-7"]);
            } else if (scores === 8) {
                setFinalText(langData.finalTexts["8"]);
            }
        }
        
    };


    return (
        <div className="final-text">
            <div>
                {finalText}
            </div>
            <div>
                {internationalLanguage[language].scoreText.replace("{scores}",scores)}
            </div>              
                <div className="button-container">
                    <button 
                    className="backtohome-button"
                    onClick={()=> navigate("/")}
                    >
                    {internationalLanguage[language].buttonText}
                    </button>
                </div>
        </div>
    )
}

export default ResultText;