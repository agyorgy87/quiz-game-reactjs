import "../css/QuizGame.css";
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import quizData from '../quizData.json';
import carolina from '../img/carolina.jpg';
import goat from '../img/goat.jpg';
import gold from '../img/gold.jpg';
import humanbones from '../img/humanbones.jpg';
import octopus from '../img/octopus.jpg';
import penguin from '../img/penguin.jpg';
import solarsystem from '../img/solarsystem.jpg';
import titanic from '../img/titanic.jpg';

const QuizGame = () => {

    let navigate = useNavigate();

    const [allQuizData, setAllQuizData] = useState(quizData)
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
  
    const [result, setResult] = useState(false);
  
    const [scores, setScores] = useState(0);
  
    const [seconds, setSeconds] = useState(60);
  
    const [finalText, setFinalText] = useState("string")
  
    const [textColor,setTextColor] = useState('black');
  
    const [color1,setColor1 ]= useState('#e6e6e6');
  
    const [color2,setColor2 ]= useState('#e6e6e6');
  
    const [color3,setColor3 ]= useState('#e6e6e6');
  
    const [color4,setColor4 ]= useState('#e6e6e6');
  
    const [hoverDisabled, setHoverDisabled]= useState('visible');
  
    const picturesOfQuiz = [
      {image: humanbones},
      {image: solarsystem},
      {image: octopus},
      {image: titanic},
      {image: gold},
      {image: goat},
      {image: carolina},
      {image: penguin},
    ]

    useEffect (() => {
        let myTimeout;
            if(seconds > 0) {
                 myTimeout = setTimeout(() => setSeconds(seconds - 1), 1000);			
            }else{
                 navigate('/timeisup')
            }
        
            return () => {
                    clearTimeout(myTimeout);			
            }
      }, [seconds, navigate]);
    
      const handleAnswerButtonClick = (isCorrect, e) => {
    
        setSeconds(5);
    
        if(e.target.id === 'answerOption1' && isCorrect === true){
            setColor1('green');
            setHoverDisabled('none')
        } else if(e.target.id === 'answerOption1' && isCorrect === false){
            setColor1('red');
            setHoverDisabled('none')
        } else if(e.target.id === 'answerOption2' && isCorrect === true){
            setColor2('green');
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption2" && isCorrect === false){
            setColor2("red");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption3" && isCorrect === true){
            setColor3("green");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption3" && isCorrect === false){
            setColor3("red");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption4" && isCorrect === true){
            setColor4("green");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption4" && isCorrect === false){
            setColor4("red");
            setHoverDisabled('none')
        }
    
        resultPage();
    
        setTimeout(() => {
            if(isCorrect) {
                setScores(scores + 1)
                setSeconds(60);
                setHoverDisabled('visible');
            }else{
                setSeconds(60);
                setHoverDisabled('visible');
            }
              
            const nextQuestion = currentQuestion + 1;
              
            if(nextQuestion < allQuizData.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setResult(true);		
            }
            setColor1("#e6e6e6");
            setColor2("#e6e6e6");
            setColor3("#e6e6e6");
            setColor4("#e6e6e6");	
            }, 5000);
      }
    
      const resultPage = () => {
        if(scores === 0) {
            setFinalText("0 pontot értél el :( Próbáld meg újra!")
        } else if(scores > 0 && scores < 4) {
            setFinalText("Nem rossz, de próbáld meg újra :)")
        } else if(scores > 4 && scores < 6) {
            setFinalText("Gratulálok! Ez szép volt :)")
        } else if(scores > 6) {
            setFinalText("Lenyűgöző! te tényleg mindent tudsz az állatokról!")
        }
      }

    return (
        <div className="quiz-page">
            {result ? (
                <div>
                    <div>{finalText}</div>
                        <div>{allQuizData.length}-ból {scores} Pontszámot értél el.</div>
                        <div>
                            <button 
                                onClick={()=> navigate("/")}
                                >
                                VISSZA A FŐMENÜBE
                            </button>
                        </div>
                </div>	
            ) : (
                <div className="quiz-game-container">
                <div>
                    <div className="question-count-container">
                        <span> {currentQuestion + 1}</span>/{allQuizData.length}
                    </div>
                    <div className="question-counter-container">
                        {seconds}
                    </div>
                </div>
                <div className="quiz-image-container">
                    <img src={picturesOfQuiz[currentQuestion].image} alt="" className="quiz-image"/>
                </div>
                <div className="question-text-container">
                    <div className="question-text">{allQuizData[currentQuestion].questionText}</div>
                </div>
                <div className="answer-buttons-container">
                    <button 
                        id="answerOption1" 
                        className="button-style"
                        style={{background:color1,color:textColor,pointerEvents:hoverDisabled}}
                        onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[0].isCorrect, e)}                       
                        >
                        {allQuizData[currentQuestion].answerOptions[0].answerText}   
                    </button>
                    <button 
                        id="answerOption2" 
                        className="button-style"
                        style={{background:color2,color:textColor,pointerEvents:hoverDisabled}}
                        onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[1].isCorrect, e)}
                        >
                        {allQuizData[currentQuestion].answerOptions[1].answerText}
                    </button>
                    <button 
                        id="answerOption3" 
                        className="button-style"
                        style={{background:color3,color:textColor,pointerEvents:hoverDisabled}}
                        onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[2].isCorrect, e)}
                        >
                        {allQuizData[currentQuestion].answerOptions[2].answerText}   
                    </button>
                    <button 
                        id="answerOption4" 
                        className="button-style"
                        style={{background:color4,color:textColor,pointerEvents:hoverDisabled}}
                        onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[3].isCorrect, e)}
                        >
                        {allQuizData[currentQuestion].answerOptions[3].answerText}
                    </button>
                </div>
            </div>
            )}
            
        </div>
  )
}

export default QuizGame