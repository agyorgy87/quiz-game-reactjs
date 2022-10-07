import '../css/Home.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";

const Home = () => {

    let navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="quiz-text">Quiz Master</h1>
                <button
                    className="start-button"
                    onClick={() => {navigate("/quiz");}}
                    >
                    START
                    <GiBrain className="brainIcon"/>
                </button>
        </div>
    )
}

export default Home;