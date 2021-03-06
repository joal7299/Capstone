import React from 'react'
import Lizzo from "../img/Don_t_Hate_Me.mp3"
import Note1 from "../img/note1-1.svg"
import Note2 from "../img/note2-1.svg"
import Note3 from "../img/note3-1.svg"
import {ReactComponent as Bus} from "../img/Bus-Scene.svg"
import { Redirect } from 'react-router-dom'
import Typed from "react-typed";
import Delay from "react-delay"


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
            half: false,
            full: false,
            end: false,
            line: 0,
            transparent: false,
        }
        this.audio = new Audio(Lizzo);
        this.song = this.song.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({ transparent: true }), 10);
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
        if(this.state.playbackrate==.5) {
            this.setState({half: true});
        }
        if(this.state.playbackrate>1) {
            this.setState({visible: false, full:true});
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
                <div id="fadeIn" className={`fade ${this.state.transparent ? 'transparent' : ''}`}>
                {/* transparent background div */}
                </div>

            <Delay wait={1500}>
                {this.state.half == false && this.state.full == false && this.state.line==0 &&
                <div className="typedSteph">
                    <Typed className="typedRoomSteph"
                           strings={["oh gosh, Kelly looks really upset.", "I hate to see her this way.", "I wish there was some way to cheer her up."]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({line: 1})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }
            </Delay>
                {this.state.half==true &&
                <div className="typedSteph">
                    <Typed className="typedRoomSteph" strings={["her life seems to be regaining color a little","I just want to remind her of how much fun we had together"]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({half: false})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }
                {
                    this.state.full ==true &&
                    <div className="typedSteph">
                        <Typed className="typedRoomSteph" strings={["look at that!", "Kelly finally seems to be more like herself again","I hope she feels better","and knows that she will be okay without me"]}
                               fadeOut={true}
                               typeSpeed={35} onComplete={() => {
                            setTimeout(function () {
                                    this.setState({end: true})
                                }.bind(this),
                                2000)
                        }}
                        />
                    </div>
                }
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
                {this.state.end == true &&
                    <Redirect to="/end"/>
                }
                </div>
        )
    }
}

export default Friend;