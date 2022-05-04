import React from "react";

const MathExpression = (props) => {


    return (
        <div className='d-flex row Justify-content-center'>
            {`${props.left} + ${props.right}`}
        </div>
    )
}

export default MathExpression