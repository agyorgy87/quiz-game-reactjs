import '../css/Home.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import hunFlag from "../img/hun-flag.png";
import engFlag from "../img/eng-flag.png";

const Home = () => {

    let navigate = useNavigate();
    const [language, setLanguage] = useState("eng");
    const [buttonLanguage, setButtonLanguage] = useState("START")

    useEffect(() => {
        if(language === "hun") {
            setButtonLanguage("INDÍTÁS");
        }else{
            setButtonLanguage("START");
        }
    }, [language])

    return (
        <div className="home-container"> 
            <h1 className="quiz-text">Quiz</h1>
                <div className="brain-icon-container">
                    <GiBrain className="brain-icon"/>
                </div>         
                <div className="language-select-container"> 
                    <div className="english-lang-container">
                        <img src={engFlag} alt="english-flag" className="english-flag-png" />
                        <label>
                            <input
                            type="radio"
                            value="eng"
                            checked={language === "eng"}
                            onChange={(e) => setLanguage(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="hungarian-lang-container">
                        <img src={hunFlag} alt="hungarian-flag" className="hungarian-flag-png" />
                        <label>
                            <input
                            type="radio"
                            value="hun"
                            checked={language === "hun"}
                            onChange={(e) => setLanguage(e.target.value)}
                            />
                        </label>  
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