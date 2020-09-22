import React from 'react';

function SessionLength(props){

    function increaseCounter(){
        if( props.sessionLength === 60 )
            return;

        props.increaseSession();
    }
    function decreaseCounter(){
        if( props.sessionLength === 1 )
            return;
        props.decreaseSession();
    }

    return (
        <div className="interval-container">
            <p id="session-label">Session Length</p>
            <div className="interval-text">
                <button
                    disabled={props.isPlay === true
                        ? "disabled"
                        : ""}
                    id="session-increment"
                    onClick={increaseCounter}>+</button>
                <p id="session-length">{props.sessionLength}</p>
                <button
                    disabled={props.isPlay === true
                        ? "disabled"
                        : ""}
                    id="session-decrement"
                    onClick={decreaseCounter}>-</button>
            </div>
        </div>
    );
}

export default SessionLength;