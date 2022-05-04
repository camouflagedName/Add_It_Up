import React, {useState} from "react";

const UserInput = (props) => {
    const [input, setInput] = useState()

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        props.submitAnswer(input)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" onChange={handleInputChange}/>
                <button type="submit" className="btn btn-primary">Submit Answer!</button>
            </form>
        </>
    )
}

export default UserInput