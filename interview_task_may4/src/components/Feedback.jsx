import { useState, useEffect } from "react"
const Feedback = (props) => {
    const [feedback, setFeedback] = useState((<></>))


    useEffect(() => {
        const correctAnswerFeedback = (
            <>
                <h2>You are correct!</h2>
                <p>Answer: {props.userAnswer}</p>
            </>
        )

        const incorrectAnswerFeedback = (
            <>  <h2>Try again!</h2>
                <h5>Your answer: {props.userAnswer}</h5>
                <h5>The correct answer: {props.correctAnswer}</h5>
            </>
        )
        console.log(`${props.correctAnswer} and ${props.userAnswer}`)
        if(props.correctAnswer !== undefined && props.userAnswer !== undefined) {
            const isUserCorrect = props.userAnswer === props.correctAnswer ? correctAnswerFeedback : incorrectAnswerFeedback
            setFeedback(isUserCorrect)    
        }
    }, [props.correctAnswer, props.userAnswer])

    return (
        <>
            {feedback}
        </>

    )
}

export default Feedback