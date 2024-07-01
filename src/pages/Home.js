import '../css/Home.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import huFlag from "../img/hun-flag.png";
import enFlag from "../img/eng-flag.png"; 

const Home = () => {

    let navigate = useNavigate();
    const [language, setLanguage] = useState("en");
    const [buttonLanguage, setButtonLanguage] = useState("START");

    useEffect(() => {
        if(language === "hu") {
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
                        <img src={enFlag} alt="english-flag" className="english-flag-png" />
                        <label>
                            <input
                            type="radio"
                            value="en"
                            checked={language === "en"}
                            onChange={(e) => setLanguage(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="hungarian-lang-container">
                        <img src={huFlag} alt="hungarian-flag" className="hungarian-flag-png" />
                        <label>
                            <input
                            type="radio"
                            value="hu"
                            checked={language === "hu"}
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