const Timer = (props) => {
    /* renders the timer that appears at the bottom of the screen-
        all logic is contained in app.js
    */

    return (
        <>
            <div className="text-center border border-2 col-10 offset-1">
                <h2>Timer:</h2>
                <p className="fs-1 mb-1 text-danger">0:{props.timer}</p>
            </div>

        </>
    )
}

export default Timer