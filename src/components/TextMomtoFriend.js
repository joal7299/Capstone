import React from 'react'
import {ReactComponent as TextFrom} from "../img/text-from.svg"
import {ReactComponent as TextTo} from "../img/text-to.svg"
import {ReactComponent as TextBox} from "../img/TextBox.svg"
import Typed from "react-typed";
import ScrollAnimation from "react-animate-on-scroll"
import { Redirect } from 'react-router-dom'
import Delay from "react-delay"


class TextMomtoFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text2: false
        };
    }

    render() {
        return (
            <div>
                    <TextTo className="textTo"></TextTo>
                    {/*<p className="textFromMomtoFriend">Hey Jess, hope you're<br></br> hanging in there.</p>*/}
                    <p className="textFromMomtoFriend">Hey Tony, hope you're<br></br> hanging in there.</p>
                    <Delay wait={3000}>
                        <TextFrom className="textFrom"></TextFrom>
                        <p className="textFromMomtoFriend2">Hi Mrs.Walker! I miss<br></br> Steph a ton, but doing what<br></br> I can to be okay for now.</p>
                    </Delay>
                    <Delay wait={6000}>
                        <TextTo className="textTo2"></TextTo>
                        <p className="textFromMomtoFriend3">Same here. I found a sweet<br></br> note she wrote about me..<br></br> really comforting</p>
                    </Delay>
                    <Delay wait={9000}>
                        <TextTo className="textTo3"></TextTo>
                        <p className="textFromMomtoFriend4">Also, found a scrapbook I<br></br>think Steph was making for<br></br>your anniversary.</p>
                    </Delay>
                    <Delay wait={11000}>
                    <p className="sendText">Thanks, I'll come pick it up.</p>
                    <TextBox className="texting"/>
                    </Delay>
                    <Delay wait={14000}>
                        <Redirect to="/boyfriend"/>
                    </Delay>


            </div>
        )
    }
}
export default TextMomtoFriend;