import "../css/QuizGame.css";
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import hunLangQuiz from '../json/hunLangQuiz.json';
import engLangQuiz from '../json/engLangQuiz.json';
import spider from '../img/spider.jpg';
import goat from '../img/goat.jpg';
import gold from '../img/gold.jpg';
import humanbones from '../img/humanbones.jpg';
import octopus from '../img/octopus.jpg';
import penguin from '../img/penguin.jpg';
import solarsystem from '../img/solarsystem.jpg';
import lion from '../img/lion.jpg';

const QuizGame = () => {

    let navigate = useNavigate();
    let { language } = useParams();

    useEffect(() => {
        if(language === "hun") {
            setAllQuizData(hunLangQuiz);
        }
    }, [language])


    const [allQuizData, setAllQuizData] = useState(engLangQuiz);
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
  
    const [result, setResult] = useState(false);
  
    const [scores, setScores] = useState(0);
  
    const [seconds, setSeconds] = useState(60);
  
    const [finalText, setFinalText] = useState("string")
  
    const [textColor, setTextColor] = useState('black');
  
    const [color1,setColor1 ]= useState('#EFEFEF');
  
    const [color2,setColor2 ]= useState('#EFEFEF');
  
    const [color3,setColor3 ]= useState('#EFEFEF');
  
    const [color4,setColor4 ]= useState('#EFEFEF');
  
    const [hoverDisabled, setHoverDisabled]= useState('visible');
  
    const picturesOfQuiz = [
      {image: humanbones},
      {image: solarsystem},
      {image: octopus},
      {image: lion},
      {image: gold},
      {image: goat},
      {image: spider},
      {image: penguin},
    ]

    useEffect (() => {
        let myTimeout;
            if(seconds > 0) {
                 myTimeout = setTimeout(() => setSeconds(seconds - 1), 1000);			
            }else{
                 navigate('/timeup')
            }
        
            return () => {
                    clearTimeout(myTimeout);			
            }
      }, [seconds, navigate]);
    
    const handleAnswerButtonClick = (isCorrect, e) => {
    
        setSeconds(5);
    
        if(e.target.id === 'answerOption1' && isCorrect === true){
            setColor1('#82d37f');
            setHoverDisabled('none')
        } else if(e.target.id === 'answerOption1' && isCorrect === false){
            setColor1('#c84c4c');
            setHoverDisabled('none')
        } else if(e.target.id === 'answerOption2' && isCorrect === true){
            setColor2('#82d37f');
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption2" && isCorrect === false){
            setColor2("#c84c4c");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption3" && isCorrect === true){
            setColor3("#82d37f");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption3" && isCorrect === false){
            setColor3("#c84c4c");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption4" && isCorrect === true){
            setColor4("#82d37f");
            setHoverDisabled('none')
        } else if(e.target.id === "answerOption4" && isCorrect === false){
            setColor4("#c84c4c");
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
            setColor1("#EFEFEF");
            setColor2("#EFEFEF");
            setColor3("#EFEFEF");
            setColor4("#EFEFEF");	
            }, 5000);
    }
    
    const resultPage = () => {
        if(scores === 0) {
            setFinalText("0 pontot értél el :( Próbáld meg újra!")
        } else if(scores > 0 && scores < 4) {
            setFinalText("Nem rossz, próbáld meg újra :)")
        } else if(scores > 4 && scores < 6) {
            setFinalText("Gratulálok! Ez szép volt :)")
        } else if(scores > 6) {
            setFinalText("Lenyűgöző! te tényleg mindent tudsz!")
        }
    }

    console.log("language:", language);

    return (
        <div className="quiz-page">
            {result ? (
                <div className="result-container">
                    <div className="final-text">
                        {finalText}
                    </div>
                    <div className="score-container">
                        {allQuizData.length}-ból {scores} Pontszámot értél el.
                    </div>
                    <div className="button-container">
                        <button 
                            className="backtohome-button"
                            onClick={()=> navigate("/")}
                            >
                            VISSZA A FŐMENÜBE
                        </button>
                    </div>
                </div>	
            ) : (
                <div className="quiz-game-container">
                    <div className="count-counter-container">
                        <div className="question-count-container">
                            <span> {currentQuestion + 1}</span>/{allQuizData.length}
                        </div>
                        <div className="question-counter-container">
                            {seconds}
                        </div>
                    </div>
                        <img src={picturesOfQuiz[currentQuestion].image} alt="" className="quiz-image"/>                  
                    <div className="question-text-container">
                        <div className="question-text">
                            {allQuizData[currentQuestion].questionText}
                        </div>
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

export default QuizGame;