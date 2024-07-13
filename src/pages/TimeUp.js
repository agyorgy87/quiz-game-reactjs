import '../css/TimeUp.css';
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineTimer } from "react-icons/md";
import internationalLanguage from '../json/internationalLanguage.json';

const TimeUp = () => {

    let navigate = useNavigate();
    let { language } = useParams();

    return (
        <div className="timeup-container">
            <div>
                <h3 className="timeup-text">{internationalLanguage[language].timeUpText}</h3>
                    <div className="timeup-icon-container">
                        <MdOutlineTimer className="timeup-icon"/>
                    </div>  
                    <div className="button-container">
                        <button 
                            className="timeup-button"
                            onClick={() => {navigate("/")}} 
                            >{internationalLanguage[language].timeUpButtonText}</button>    
                    </div> 
            </div>        
        </div>
    )
}

export default TimeUp;
