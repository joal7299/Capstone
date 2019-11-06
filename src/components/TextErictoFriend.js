import React from 'react'
import {ReactComponent as TextFrom} from "../img/text-from.svg"
import {ReactComponent as TextTo} from "../img/text-to.svg"
import {ReactComponent as TextBox} from "../img/TextBox.svg"
import Typed from "react-typed";
import ScrollAnimation from "react-animate-on-scroll"
import { Redirect } from 'react-router-dom'
import Delay from "react-delay"

class TextMomtoBoyfriend extends React.Component {
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
                    <p className="textErictoFriend1">Hi Kelly! How<br></br> have you been doing?</p>
                    <Delay wait={3000}>
                        <TextFrom className="textFrom"></TextFrom>
                        <p className="textErictoFriend2">Hey Eric. I've been better.<br></br> I just feel weird without her.<br></br> Everything keeps <br></br> reminding me of her</p>
                    </Delay>
                    <Delay wait={6000}>
                        <TextTo className="textTo2"></TextTo>
                        <p className="textErictoFriend3">I know what you mean.<br></br> Mrs. Walker gave me a <br></br> scrapbook Steph had made <br></br>for me.</p>
                    </Delay>
                    <Delay wait={9000}>
                        <TextTo className="textTo3"></TextTo>
                        <p className="textErictoFriend4">It was tough to get through <br></br> but after I read it<br></br>I realized something </p>
                    </Delay>
                    <Delay wait={12000}>
                        <TextTo className="textTo4"></TextTo>
                        <p className="textErictoFriend5">It's a piece of her that's <br></br> still her with us.<br></br>And I'm so grateful for that. </p>
                    </Delay>
                    <Delay wait={15000}>
                    <p className="sendTextEric">Thanks Eric! That helps a lot.</p>
                    <TextBox className="textingErictoFriend"/>
                    </Delay>
                    <Delay wait={22000}>
                        <Redirect to="/friend"/>
                    </Delay>


            </div>
        )
    }
}
export default TextMomtoBoyfriend;