import React from 'react'
import Lizzo from "../img/Don_t_Hate_Me.mp3"
import Note1 from "../img/note1-1.svg"
import Note2 from "../img/note2-1.svg"
import Note3 from "../img/note3-1.svg"
import {ReactComponent as Bus} from "../img/Bus-Scene.svg"
import { Redirect } from 'react-router-dom'
import Typed from "react-typed";


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
            complete: false,
            opacity:.4,
            clicks: 0,
        }
        this.audio = new Audio(Lizzo);
        this.song = this.song.bind(this);
    }

    song = ()=> {
        this.setState({top: (Math.floor(Math.random()*(window.screen-50))), clicks: 1, left: Math.floor(Math.random()*(window.screen.availWidth-100))});
        console.log(this.state.left);
        if(this.state.playbackrate<1.5) {
            this.setState({playbackrate: this.state.playbackrate+.1});
            this.audio.playbackRate = this.state.playbackrate;
            this.audio.play();
            this.setState({opacity: this.state.opacity+.075});

        }
        if(this.state.playbackrate>1) {
            this.setState({visible: false});
        }
    }


    render() {
        const notes = [Note1, Note2, Note3];
        let top = this.state.top;
        let left = this.state.left;
        let opacity = this.state.opacity;
        console.log(top);
        return (
            <div>
                <div className="typedSteph">
                    <Typed className="typedRoomSteph" strings={["oh gosh, Kelly looks really upset.","I hate to see her this way.","I wish there was some way to cheer her up."]}
                           fadeOut={true}
                           typeSpeed={35}
                    />
                </div>
                <div className="busScene">
                {this.state.visible == true &&
                    <div>
                        <img className="note" style={{position: "absolute", top: top, left: left}} onClick={this.song} src={notes[Math.floor(Math.random()*notes.length)]} ></img>
                    </div>
                        }
                    {this.state.clicks==0 &&
                    <div className="musicInstruct">
                        <p>Click the notes to speed up the song and brighten Kelly's day.</p>
                    </div>
                    }
                        <Bus style={{opacity: opacity, zIndex: 25}}></Bus>
                </div>
                {this.state.visible == false &&
                    <Redirect to="/end"/>
                }
                </div>
        )
    }
}

export default Friend;