import './App.css';
import MathExpression from './components/MathExpression';
import UserInput from './components/UserInput';
import Feedback from './components/Feedback';
import Progress from './components/Progress';
import Timer from './components/Timer';
import { useState, useEffect } from 'react';
const randomNumberLeft = Math.floor((Math.random() * 100) + 1)
const randomNumberRight = Math.floor((Math.random() * 100) + 1)

function App() {
  /*
    this is the main container and will consist of 4 components:
      *math expression - gen random numbers
      *UserInput - displays input field and submit button for user to enter response
      *Feedback - response passed as prop and displayed
      *Progress component that displays "score"
  */
  const [userAnswer, setUserAnswer] = useState()
  const [correctAnswer, setCorrectAnswer] = useState()
  const [randomNumber, setRandomNumber] = useState([randomNumberLeft, randomNumberRight])
  const [errorMsg, setErrorMsg] = useState(<></>)
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [isTimeOver, setIsTimeOver] = useState(false)
  const [pauseTimer, setPauseTimer] = useState(false)
  const [timer, setTimer] = useState(15)

  const submitAnswer = (userResponse) => {
    
    //prevent user from entering non-numerical answers
    if(userResponse === undefined) {
      setErrorMsg(<p className='mb-0 text-danger'>Enter an answer before proceeding.</p>)
    }
    else if(isNaN(Number(userResponse))) {
      setErrorMsg(<p className='mb-0 text-danger'>Please enter a number to proceed.</p>)
    }
    else {
      setPauseTimer(true)
      setErrorMsg(<></>)
      setAnswerSubmitted(!answerSubmitted)
      setUserAnswer(userResponse) 
      const URL = `https://api.mathjs.org/v4/?expr=${randomNumber[0]}%2B${randomNumber[1]}`
  
      fetch(URL)
        .then(response => {
          if (response.status === 200) return response.json()
          throw new Error("Bad network response. Response status code: ", response.status)
        })
        .then(result => {
          setCorrectAnswer(result.toString())
        })
        .catch(error => console.log(error.message))
    }
  }
  /* onClick event to render new problem or problem set */
  const goToNextProblem = () => {
    const randomNumberLeft = Math.floor((Math.random() * 100) + 1)
    const randomNumberRight = Math.floor((Math.random() * 100) + 1)

    setRandomNumber(prev => {
        prev.splice(0, 1, randomNumberLeft)
        prev.splice(1, 1, randomNumberRight)
        return [...prev]
      })
      
      setTotalAnswered(totalAnswered + 1)
      if(userAnswer === correctAnswer) setTotalCorrect(totalCorrect + 1)
      setAnswerSubmitted(!answerSubmitted)
      setPauseTimer(false)
      setIsTimeOver(false)
      setTimer(15)
  }

  const defaultRender = <UserInput submitAnswer={submitAnswer} error={errorMsg} /> 

  const hasAnswered = (
    <>
      <Feedback userAnswer={userAnswer} correctAnswer={correctAnswer} handleClick={goToNextProblem} setTotalCorrect={setTotalCorrect} />
    </>
  )

  /*Timer*/
  const setTimeLeft = () => {
      if(pauseTimer) return
      if (timer > 0) {
          setTimer(timer => {
          //add a '0' in front of timer if it is single digit (0-9)
              if (timer < 11) return `0${timer - 1}`
              return timer - 1
          })
      }
      else {
          // render "Time's Up" and give the correct answer
          submitAnswer('')
          setIsTimeOver(true)
      }
  }

  useEffect(() => {
      const timeLeft = setInterval(() => setTimeLeft(), 1000)
      return () => clearInterval(timeLeft)
  })

  return (
    <>
      <div className="container-fluid col-lg-6 offset-lg-3 col-sm-8 offset-sm-2 col-10 offset-1 border border-info border-3 mt-5 rounded shadow">
        <h1 className="text-center mt-5">Add It Up!</h1>
        <hr />
        {
          isTimeOver 
            ? <h1 className="text-center text-info"> TIME IS UP!</h1>
            : <MathExpression left={randomNumber[0]} right={randomNumber[1]} />
        }
        {
          answerSubmitted === false 
            ? defaultRender
            : hasAnswered
        }
        <Progress total={totalAnswered} correct={totalCorrect} />
      </div>
      <div className='mt-5 justify-content-center'>
        <Timer timer={timer} />
      </div>

    </>
  );
}

export default App;
