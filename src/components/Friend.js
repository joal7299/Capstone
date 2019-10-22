import React from 'react'
import Lizzo from "../img/lizzo.mp3"
import Note1 from "../img/note1-1.svg"
import Note2 from "../img/note2-1.svg"
import Note3 from "../img/note3-1.svg"
import {ReactComponent as Bus} from "../img/Bus-Scene.svg"



import {ReactComponent as Note} from "../img/background.svg"

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
            percentage: 0,
        }
        this.audio = new Audio(Lizzo);
        this.song = this.song.bind(this);
    }

    song = ()=> {
        this.setState({top: (Math.floor(Math.random()*(window.screen.availHeight-200))), left: Math.floor(Math.random()*(window.screen.availWidth-200))});
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


    render() {
        const notes = [Note1, Note2, Note3];
        let top = this.state.top;
        let left = this.state.left;
        console.log(top);
        return (
            <div>
                {this.state.visible == true &&
                    <div>
                        {/*<ProgressBar percentage={this.state.percentage} />*/}
                        <img className="note" style={{position: "absolute", top: top, left: left}} onClick={this.song} src={notes[Math.floor(Math.random()*notes.length)]} ></img>
                        {/*<button style={{position: "absolute", top: top, left: left}} onClick={this.song}></button>*/}
                    </div>
                        }
                        <Bus></Bus>
                </div>
        )
    }
}

export default Friend;