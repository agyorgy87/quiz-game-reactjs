import '../css/Home.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import huFlag from "../img/hun-flag.png";
import enFlag from "../img/eng-flag.png"; 

const Home = () => {

    let navigate = useNavigate();
    const [language, setLanguage] = useState("en");
    const [buttonLanguage, setButtonLanguage] = useState("START");


    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        if(lang === "hu") {
            setButtonLanguage("INDÍTÁS");
        } else {
            setButtonLanguage("START");
        }
    }

    return (
        <div className="home-container"> 
            <h1 className="quiz-text">Quiz</h1>
                <div className="brain-icon-container">
                    <GiBrain className="brain-icon"/>
                </div> 
                <div className="language-select-container"> 
                    <div className="english-lang-container" onClick={() => handleLanguageChange("en")}>
                        <img src={enFlag} alt="english-flag" className="english-flag-png" />
                    </div>
                    <div className="hungarian-lang-container" onClick={() => handleLanguageChange("hu")}>
                        <img src={huFlag} alt="hungarian-flag" className="hungarian-flag-png" />
                    </div>                                
                </div>
                <div className="button-container">
                    <button
                        className="start-button"
                        onClick={() => navigate(`/quiz/${language}`)}
                        >
                        {buttonLanguage}
                    </button>
                </div>             
        </div>
    )
}

export default Home;