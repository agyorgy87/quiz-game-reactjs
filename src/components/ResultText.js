import { useState, useEffect } from 'react';
import "../css/ResultText.css";
import { useNavigate } from "react-router-dom";
import internationalLanguage from '../json/internationalLanguage.json';


const ResultText = ({language, scores, result}) => {

    const [finalText, setFinalText] = useState("")

    let navigate = useNavigate(); 

    useEffect(() => {
        if(result === true) {
            resultAnnouncement();
        }
    },[result])

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
                <div>
                    <button 
                    className="back-to-home-button"
                    onClick={()=> navigate("/")}
                    >
                    {internationalLanguage[language].buttonText}
                    </button>
                </div>
        </div>
    )
}

export default ResultText;