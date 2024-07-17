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
        if(language === "hu") {
            setAllQuizData(hunLangQuiz);
        }else if(language === "en"){
            setAllQuizData(engLangQuiz)
        }
    }, [language])

    const [allQuizData, setAllQuizData] = useState(engLangQuiz);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(false);
    const [scores, setScores] = useState(0);
    const [seconds, setSeconds] = useState(60); 

    useEffect (() => {
        let myTimeout;
            if(seconds > 0) {
                myTimeout = setTimeout(() => setSeconds(seconds - 1), 1000);			 
            }else{
                navigate(`/timeup/${language}`)
            }
        
            return () => {
                clearTimeout(myTimeout);			
            }
    }, [seconds, navigate]);
    
    return (  
        <div className={`quiz-page ${result ? "mobile-view" : ""}`}> 
            {result ? (
                <div className="result-container"> 
                    <ResultText 
                    language={language} allQuizData={allQuizData} scores={scores} result={result}
                    />
                </div>	
            ) : (
                <div className="quiz-game-container">
                    <div>
                        <QuestionCounterAndTimer currentQuestion={currentQuestion} allQuizData={allQuizData} seconds={seconds}/>
                    </div>
                    <div>
                        <QuestionImage currentQuestion={currentQuestion}/>  
                    </div>          
                    <div>
                        <QuestionText allQuizData={allQuizData} currentQuestion={currentQuestion}/>
                    </div>
                    <div>
                        <AnswerOptions 
                        allQuizData={allQuizData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}  
                        setSeconds={setSeconds} scores={scores} setScores={setScores} setResult={setResult}                                                          
                        />
                    </div>
                </div>
            )}            
        </div>
    )
}

export default QuizGame;