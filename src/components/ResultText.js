import { useState, useEffect } from 'react';
import "../css/ResultText.css";
import { useNavigate } from "react-router-dom";
import en_lang from "../translation/en.json";
import hu_lang from "../translation/hu.json";


const ResultText = ({ language, scores, result }) => {
    const [finalText, setFinalText] = useState("");
    const [langData, setLangData] = useState(en_lang);

    let navigate = useNavigate();

    useEffect(() => {
        switch (language) {
            case "hu":
                setLangData(hu_lang);
                break;
            case "en":
            default:
                setLangData(en_lang);
                break;
        }
    }, [language]);

    useEffect(() => {
        if (result === true) {
            resultBoardMessage();
        }
    }, [result, langData]);

    const resultBoardMessage = () => {
        if (langData) {
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
        <div>
            <div> 
                <p className="score-text">{langData.scoreText.replace("{scores}", scores)}</p>
            </div>
            <div>
                <p className="performance-text">{finalText}</p>
            </div>              
            <div className="back-to-home-button-container">
                <button 
                    className="back-to-home-button"
                    onClick={() => navigate("/")}
                >
                    {langData.scoreButtonText}
                </button>
            </div>
        </div>
    );
}

export default ResultText;
