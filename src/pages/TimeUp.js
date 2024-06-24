import '../css/TimeUp.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdOutlineTimer } from "react-icons/md";

const TimeUp = () => {

    let navigate = useNavigate();

    return (
        <div className="timeup-container">
            <h3 className="timeup-text">LEJÁRT AZ IDŐD</h3>
                <div className="timeup-icon-container">
                    <MdOutlineTimer className="timeup-icon"/>
                </div>  
                <div className="button-container">
                    <button 
                        className="timeup-button"
                        onClick={() => {navigate("/")}}
                        >PRÓBÁLD ÚJRA</button>    
                </div>       
                
        </div>
  )
}

export default TimeUp;

//