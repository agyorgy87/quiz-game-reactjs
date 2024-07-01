import { useState } from 'react';
import "../css/QuizGame.css";

const AnswerOptions = ({allQuizData, currentQuestion, setSeconds, scores, setScores, setResult, setCurrentQuestion}) => {

    const [color1,setColor1 ]= useState('#EFEFEF');
  
    const [color2,setColor2 ]= useState('#EFEFEF');
  
    const [color3,setColor3 ]= useState('#EFEFEF');
  
    const [color4,setColor4 ]= useState('#EFEFEF');

    const [hoverDisabled, setHoverDisabled]= useState('visible');

    
    const handleAnswerButtonClick = (isCorrect, e) => {
    
        setSeconds(5);
    
        if(e.target.id === 'answerOption1' && isCorrect === true){
            setColor1('#82d37f');
            setHoverDisabled('none');
        } else if(e.target.id === 'answerOption1' && isCorrect === false){
            setColor1('#c84c4c');
            setHoverDisabled('none');
        } else if(e.target.id === 'answerOption2' && isCorrect === true){
            setColor2('#82d37f');
            setHoverDisabled('none');
        } else if(e.target.id === "answerOption2" && isCorrect === false){
            setColor2("#c84c4c");
            setHoverDisabled('none');
        } else if(e.target.id === "answerOption3" && isCorrect === true){
            setColor3("#82d37f");
            setHoverDisabled('none');
        } else if(e.target.id === "answerOption3" && isCorrect === false){
            setColor3("#c84c4c");
            setHoverDisabled('none');
        } else if(e.target.id === "answerOption4" && isCorrect === true){
            setColor4("#82d37f");
            setHoverDisabled('none');
        } else if(e.target.id === "answerOption4" && isCorrect === false){
            setColor4("#c84c4c");
            setHoverDisabled('none');
        }
    
        setTimeout(() => {
            if(isCorrect) {
                setScores(scores + 1);
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

    return (
        <div className="answer-buttons-container">
            <button 
            id="answerOption1" 
            className="button-style"
            style={{background:color1,pointerEvents:hoverDisabled}}
            onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[0].isCorrect, e)}                       
            >
                {allQuizData[currentQuestion].answerOptions[0].answerText}   
            </button>
            <button 
            id="answerOption2" 
            className="button-style"
            style={{background:color2,pointerEvents:hoverDisabled}}
            onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[1].isCorrect, e)}
            >
                {allQuizData[currentQuestion].answerOptions[1].answerText}
            </button>
            <button 
            id="answerOption3" 
            className="button-style"
            style={{background:color3,pointerEvents:hoverDisabled}}
            onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[2].isCorrect, e)}
            >
                {allQuizData[currentQuestion].answerOptions[2].answerText}   
            </button>
            <button 
            id="answerOption4" 
            className="button-style"
            style={{background:color4,pointerEvents:hoverDisabled}}
            onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[3].isCorrect, e)}
            >
                {allQuizData[currentQuestion].answerOptions[3].answerText}
            </button>
        </div>
    )
}

export default AnswerOptions;