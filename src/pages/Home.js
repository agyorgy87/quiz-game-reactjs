import '../css/Home.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";

const Home = () => {

    let navigate = useNavigate();

    return (
        <div className="home-container"> 
            <h1 className="quiz-text">Quiz Mester</h1>
                <div className="brain-icon-container">
            <GiBrain className="brain-icon"/>
                </div>
                <div className="button-container">
                    <button
                        className="start-button"
                        onClick={() => {navigate("/quiz");}}
                        >
                        START
                    </button>
                </div>
                
        </div>
    )
}

export default Home;