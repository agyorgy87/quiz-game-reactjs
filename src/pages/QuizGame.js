import "../css/QuizGame.css";
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import hunLangQuiz from '../json/hunLangQuiz.json';
import engLangQuiz from '../json/engLangQuiz.json';
import QuestionCounterAndTimer from "../components/QuestionCounterAndTimer";
import QuestionImage from "../components/QuestionImage";
import QuestionText from "../components/QuestionText";
import AnswerOptions from "../components/AnswerOptions";
import ResultText from "../components/ResultText";

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
    

    return (
        <div className="quiz-page">
            {result ? (
                <div className="result-container">
                    <ResultText finalText={finalText} allQuizData={allQuizData} scores={scores}/>
                </div>	
            ) : (
                <div className="quiz-game-container">
                    <div>
                        <QuestionCounterAndTimer currentQuestion={currentQuestion} allQuizData={allQuizData} seconds={seconds}/>
                    </div>
                    <div>
                        <QuestionImage currentQuestion={currentQuestion}/>  
                    </div>          
                    <div className="question-text-container">
                        <QuestionText allQuizData={allQuizData} currentQuestion={currentQuestion}/>
                    </div>
                    <div>
                        <AnswerOptions 
                        allQuizData={allQuizData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}  
                        setSeconds={setSeconds} scores={scores} setScores={setScores} setResult={setResult} setFinalText={setFinalText}                                          
                        />
                    </div>
                </div>
            )}            
        </div>
    )
}

export default QuizGame;