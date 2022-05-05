import React, { useState } from "react";

/*
    displays a form for users to enter answer input -
        data gets stored in state via the handleInputChange function
        and then is passed to parent component through a props function in handleSubmit
*/
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
        <div className='d-flex row justify-content-center mb-5'>
            <form onSubmit={handleSubmit} className='justify-content-end col-8'>
                <input type='text' className="form-control" style={{ height: "150px", fontSize: "50px", textAlign: "center" }} onChange={handleInputChange} />
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary mt-3">Submit Answer!</button>
                </div>
            </form>
        </div>
    )
}

export default UserInput