import React from "react";

const MathExpression = (props) => {


    return (
        <div className='container'>
            {`${props.left} + ${props.right}`}
        </div>
    )
}

export default MathExpression