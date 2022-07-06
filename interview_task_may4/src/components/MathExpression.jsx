//    component that displays the data passed through props in the form of ____ + ____

const MathExpression = (props) => {
    return (
        <div className='d-flex row text-center my-5'>
            <h1><span>{props.left}</span> + <span>{props.right}</span></h1>
        </div>
    )
}

export default MathExpression