import React from 'react';
import "../css/QuestionImage.css";
import spider from '../img/spider.jpg';
import goat from '../img/goat.jpg';
import gold from '../img/gold.jpg';
import humanbones from '../img/humanbones.jpg';
import octopus from '../img/octopus.jpg';
import penguin from '../img/penguin.jpg';
import solarsystem from '../img/solarsystem.jpg';
import lion from '../img/lion.jpg';

const QuestionImage = ({currentQuestion}) => { 

    const picturesOfQuiz = [
        {image: humanbones},
        {image: solarsystem},
        {image: octopus},
        {image: lion},
        {image: gold},
        {image: goat},
        {image: spider},
        {image: penguin}
    ];

    return ( 
        <div>
            <img src={picturesOfQuiz[currentQuestion].image} alt="image-for-the-question" className="quiz-image"/>    
        </div>
    )
}

export default QuestionImage;