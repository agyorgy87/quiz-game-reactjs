import React from 'react'

const QuestionCounter = ({currentQuestion, allQuizData}) => {
  return (
    <div className="question-counter-container">
        <p>{currentQuestion + 1}/{allQuizData.length}</p>
    </div>
  )
}

export default QuestionCounter;