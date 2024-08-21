import '../css/TimeUp.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineTimer } from "react-icons/md";
import en_lang from '../translation/en.json';
import hu_lang from '../translation/hu.json';

const TimeUp = () => {

    let navigate = useNavigate();
    let { language } = useParams();

    const [langData, setLangData] = useState(en_lang);

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

    return (
        <div className="timeup-container">
            <div>
                <h3 className="timeup-text">{langData.timeUpText}</h3>
                    <div className="timeup-icon-container">
                        <MdOutlineTimer className="timeup-icon"/>
                    </div>  
                    <div className="button-container">
                        <button 
                            className="timeup-button"
                            onClick={() => {navigate("/")}} 
                            >{langData.timeUpButtonText}</button>    
                    </div> 
            </div>        
        </div>
    )
}

export default TimeUp;
