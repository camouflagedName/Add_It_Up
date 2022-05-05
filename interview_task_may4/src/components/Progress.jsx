//    component that displays the data passed through props in the form of a string

const Progress = (props) => {
    return (
        <>
            <div className="row text-center mt-5">
                <h5>Your current progress is {props.correct} out of {props.total} </h5>
            </div>
        </>
    )
}

export default Progress