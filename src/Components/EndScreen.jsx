
import React, { useContext } from 'react'
import { QuizContext } from "../Helpers/Context"
import "../App.css"
import { Question } from '../Helpers/QuestionBank'

const EndScreen = () => {
  const{score, setScore, setGameState} = useContext(QuizContext);

  const restartQuiz = ()=>{
    setScore(0);
    setGameState("menu")
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h3>{score}/{Question.length}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
