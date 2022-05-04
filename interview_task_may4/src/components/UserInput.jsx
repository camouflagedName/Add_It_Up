import React from "react";

const UserInput = (props) => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const userAnswer = event.target.value
        props.submitAnswer(userAnswer)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="number" className="form-control"/>
                <button type="submit" className="btn btn-primary">Submit Answer!</button>
            </form>
        </>
    )
}

export default UserInput