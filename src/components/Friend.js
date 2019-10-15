import React from 'react'
import Lizzo from "../img/lizzo.mp3"
// import {ReactComponent as ProgressBar} from "../img/background.svg"


class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
            playbackrate: .1,
            top: 150,
            left: 150,
            visible: true,
            percentage: 0
        }
        this.audio = new Audio(Lizzo);
        this.song = this.song.bind(this);
    }

    song = ()=> {
        this.setState({top: (Math.floor(Math.random()*(window.screen.availHeight))), left: Math.floor(Math.random()*(window.screen.availWidth))});
        console.log(this.state.left);
        if(this.state.playbackrate<1.5) {
            this.setState({playbackrate: this.state.playbackrate+.1});
            this.audio.playbackRate = this.state.playbackrate;
            this.audio.play();
            console.log(this.state.playbackrate);
        }
        if(this.state.playbackrate>1.3) {
            this.setState({visible: false});
        }

        // this.setState({play:true});
    }
    // const Filler = (props) => {
    //     return <div className=="filler" />
    // }
    //
    // const ProgressBar = (props) => {
    //     return(
    //         <div className="progress-bar"></div>
    //         <Filler percentage={props.percentage} />
    //     )
    // }


    render() {
        let top = this.state.top;
        let left = this.state.left;
        console.log(top);
        return (
            <div>
                <h1>Friend</h1>
                {this.state.visible == true &&
                    <div>
                        {/*<ProgressBar percentage={this.state.percentage} />*/}
                <button style={{position: "absolute", top: top, left: left}} onClick={this.song}>Click me!</button>
                    </div>
                        }
                </div>
        )
    }
}

export default Friend;