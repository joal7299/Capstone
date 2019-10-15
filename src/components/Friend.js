import React from 'react'
import Lizzo from "../img/lizzo.mp3"
class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.audio = new Audio(Lizzo);
        this.song = this.song.bind(this);
    }

    song = ()=> {
        this.setState({play:true});
        this.audio.playbackRate = 0.5;
        this.audio.play();
    }
    render() {
        return (
            <div>
            <span>
            </span>
            <div>
                <h1>Friend</h1>
                <button onClick={this.song}>Click me!</button>
            </div>
            </div>
        )
    }
}

export default Friend;