import React from 'react'
import {ReactComponent as TextFrom} from "../img/text-from.svg"
import {ReactComponent as TextTo} from "../img/text-to.svg"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import { Redirect } from 'react-router-dom'


class TextMomtoFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false
        };
    }

    render() {
        return (
            <div>
                <ScrollAnimation animateIn="bounceInRight">
                    <TextTo className="textTo"></TextTo>
                    <p className="textFromMomtoFriend">Hey Jess, hope you're<br></br> hanging in there.</p>
                </ScrollAnimation>
                <ScrollAnimation delay="2600" animateIn="bounceInLeft">
                    <TextFrom className="textFrom"></TextFrom>
                    <p className="textFromMomtoFriend2">Hi Mrs.Walker! I miss<br></br> Steph a ton, but doing what<br></br> I can to be okay for now.</p>
                </ScrollAnimation>
                <ScrollAnimation delay ="5500" animateIn="bounceInRight">
                    <TextTo className="textTo"></TextTo>
                    <p className="textFromMomtoFriend3">Same here. I found a<br></br> sweet note she wrote<br></br> about me.. really comforting</p>
                </ScrollAnimation>
                <ScrollAnimation delay ="6100" animateIn="bounceInRight">
                    <TextTo className="textTo2"></TextTo>
                    <p className="textFromMomtoFriend4">It made me think of you,<br></br>she loved you SO much.<br></br> xoxo</p>
                </ScrollAnimation>
                {this.state.complete == true &&
                <Redirect to="/home"/>
                }
            </div>
        )
    }
}
export default TextMomtoFriend;