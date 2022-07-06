import { useState, useEffect } from "react"

/*
    displays dynamic feedback and a button to update the page's state -
        data is passed through props, which, when updated, 
        will update state of component and render a block of elements and
        a button that updates the state of the parent component
*/
const Feedback = (props) => {
    const [feedback, setFeedback] = useState((<></>))

    //useEffect will update state (setFeedback) with props when props are updated
    useEffect(() => {
        const correctAnswerFeedback = (
            <>
                <h2>You are correct!</h2>
                <h5>Answer: {props.userAnswer}</h5>
            </>
        )

        const incorrectAnswerFeedback = (
            <>  
                <h2>Try again!</h2>
                <h5>Your answer: {props.userAnswer}</h5>
                <h5>The correct answer: {props.correctAnswer}</h5>
            </>
        )

        if(props.correctAnswer !== undefined && props.userAnswer !== undefined) {
            const isUserCorrect = props.userAnswer === props.correctAnswer ? correctAnswerFeedback : incorrectAnswerFeedback
            setFeedback(isUserCorrect)
        }
    }, [props.correctAnswer, props.userAnswer])

    const handleClick = () => {
        props.handleClick()
    }

    return (
        <div className='d-flex row text-center my-5'>
            {feedback}
            <button type='button' className='btn btn-primary col-4 offset-4 mt-3' onClick={handleClick}>Next Problem</button>
        </div>

    )
}

export default Feedback