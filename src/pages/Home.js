import '../css/Home.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import huFlag from "../img/hun-flag.png";
import enFlag from "../img/eng-flag.png"; 
import { FormattedMessage } from "react-intl";

const Home = ({ setLocale }) => {

    let navigate = useNavigate();
    const [language, setLanguage] = useState("en");

    const changeLanguage = (selectedLocale) => {
        setLocale(selectedLocale);
        setLanguage(selectedLocale);
    }

    return (
            <div className="home-container"> 
                <h1 className="quiz-text">Quiz</h1>
                    <div className="brain-icon-container">
                        <GiBrain className="brain-icon"/>
                    </div> 
                    <div className="language-select-container"> 
                        <div className="english-lang-container" onClick={() => changeLanguage("en")}>
                            <img src={enFlag} alt="english-flag" className="english-flag-png" />
                        </div>
                        <div className="hungarian-lang-container" onClick={() => changeLanguage("hu")}>
                            <img src={huFlag} alt="hungarian-flag" className="hungarian-flag-png" />
                        </div>                                
                    </div>
                    <div className="button-container">
                        <button
                            className="start-button"
                            onClick={() => navigate(`/quiz/${language}`)}
                            >
                            <FormattedMessage id="startButton" />
                        </button>
                    </div>             
            </div>
    )
}

export default Home;
