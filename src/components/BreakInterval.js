import React from 'react';

function BreakInterval(props){
    function increaseCounter(){
        if( props.breakInterval === 59 ){
            return;
        }
        props.increaseBreak();

    }
    function decreaseCounter(){
        if( props.breakInterval === 1 )
            return;
        props.decreaseBreak();
    }
    return (
        <div className="interval-container">
            <p id="break-label">Break Length</p>

            <div className="interval-text">
                <button
                    disabled={props.isPlay === true
                        ? "disabled"
                        : ""}
                    id="break-increment"
                    onClick={increaseCounter}>+</button>
                <p id="break-length">{props.breakInterval}</p>
                <button
                    disabled={props.isPlay === true
                        ? "disabled"
                        : ""}
                    id="break-decrement"
                    onClick={decreaseCounter}>-</button>
            </div>

        </div>
    );
}

export default BreakInterval;