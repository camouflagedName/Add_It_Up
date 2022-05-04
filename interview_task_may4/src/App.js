import './App.css';
import MathExpression from './components/MathExpression';
import UserInput from './components/UserInput';
import Feedback from './components/Feedback';
import { useState } from 'react';

function App() {
  /*
    this is the main container and will consist of 3 components:
    *math expression - gen random numbers
    *user input - send call to api, get response
    *feedback - response passed as prop and displayed
  */
  const [userAnswer, setUserAnswer] = useState()
  const [correctAnswer, setCorrectAnswer] = useState()
  const randomNumberLeft = Math.floor((Math.random() * 100) + 1)
  const randomNumberRight = Math.floor((Math.random() * 100) + 1)

  const submitAnswer = (userResponse) => {
    setUserAnswer(userResponse)
    const URL = `https://api.mathjs.org/v4/?expr=${randomNumberLeft}%2B${randomNumberRight}`

    fetch(URL)
      .then(response => {
        if (response.status === 200) return response.json()
      })
      .then(result => {
        setCorrectAnswer(result.toString())
      })
  }

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <MathExpression left={randomNumberLeft} right={randomNumberRight} />
          <UserInput submitAnswer={submitAnswer} />
          <Feedback userAnswer={userAnswer} correctAnswer={correctAnswer}/>
        </div>
      </div>
    </>
  );
}

export default App;
