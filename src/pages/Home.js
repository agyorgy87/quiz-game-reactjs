import '../css/Home.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import huFlag from "../img/hun-flag.png";
import enFlag from "../img/eng-flag.png"; 
import { IntlProvider, FormattedMessage } from "react-intl";
import message_en from "../translation/en.json";
import message_hu from "../translation/hu.json";

const messages = {
    en: message_en,
    hu: message_hu
}

const Home = () => {

    let navigate = useNavigate();

    const [locale, setLocale] = useState("en");

    const changeLanguage = selectedLocale => {
        setLocale(selectedLocale);
    }
/*
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
*/

    const [language, setLanguage] = useState("en");
    //const [buttonLanguage, setButtonLanguage] = useState("START");

/*
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        if(lang === "hu") {
            setButtonLanguage("INDÍTÁS");
        } else {
            setButtonLanguage("START");
        }
    }
*/

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
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
        </IntlProvider>
    )
}

export default Home;