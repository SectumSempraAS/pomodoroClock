import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();

        this.state={
            isSession : true,
            timerSecond : 0,
            intervalId : 0,
            isRunning : false
        }

        this.startOrStopTimer = this.startOrStopTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startOrStopTimer(){

        if(this.state.isRunning === false) {
            this.props.onPlayStopTimer(true);
            let intervalId = setInterval(this.decreaseTimer,1000);
            this.setState({isRunning: true})
            this.setState({intervalId: intervalId})
        }else{
            this.props.onPlayStopTimer(false);
            this.state.isRunning = false;
            clearInterval(this.state.intervalId);
        }
    }
    decreaseTimer(){
        switch (this.state.timerSecond){
            case 0:
                if(this.props.timerMinute === 0){
                    if( this.state.isSession ){
                        this.setState({
                            isSession : false,
                        })
                        this.props.toggleInterval(this.state.isSession);
                    }else{
                        this.setState({
                            isSession : true,
                        })
                        this.props.toggleInterval(this.state.isSession);
                    }
                }else{
                    this.props.updateTimer()
                    this.setState(
                        {timerSecond : 59}
                        )
                }
                break;
            default:
                this.setState( prevState => {
                    return { timerSecond :
                            prevState.timerSecond - 1}
                })
                break;
        }
    }

    resetTimer(){
        this.props.onPlayStopTimer(true);
        if( this.state.isRunning === true ){
            this.setState({
                    isRunning : false,
                });
            clearInterval(this.state.intervalId);
        }
        this.props.reset();
        this.setState({
            timerSecond : 0,
            isSession : true,
        })
    }
    onPlayStopTimer() {
        this.props.onPlayStopTimer();
    }

    render() {
        return (
            <section>
            <section id="timer-text">
                <section id="time-left">
                    <h4 id="timer-label">{this.state.isSession === true ?
                    "Session" : "Break"}</h4>
                    <div id="time-left">
                        <span>{this.props.timerMinute < 10
                            ? "0" + this.props.timerMinute
                            : this.props.timerMinute === 0
                            ? "00"
                            : this.props.timerMinute}
                        :
                            {this.state.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                            ? "0" + this.state.timerSecond
                            : this.state.timerSecond}
                        </span>
                    </div>
                </section>
                <audio id="beep"></audio>
            </section>
                <div>
                    <button id="start_stop"
                            onClick={this.startOrStopTimer}>Start/Stop</button>
                    <button id="reset"
                            onClick={this.resetTimer}>Reset</button>
                </div>
            </section>
        );
    }

}

export default Timer;