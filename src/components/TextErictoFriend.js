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
                    <div className="textTo">
                        <TextTo ></TextTo>
                    {/*<p className="textFromMomtoFriend">Hey Jess, hope you're<br></br> hanging in there.</p>*/}
                        <p className="sentText">Hi Kelly! How<br></br> have you been doing?</p>
                    </div>   



                    <Delay wait={3000}>
                        <div className="textFrom">
                            <TextFrom ></TextFrom>
                            <p className="recievedText">Hey Eric. I've been better.<br></br> I just feel weird without her.<br></br> Everything keeps <br></br> reminding me of her</p>
                        </div>
                    </Delay>



                    <Delay wait={6000}>
                        <div className="textTo2">
                            <TextTo></TextTo>
                            <p className="sentText">I know what you mean.<br></br> Mrs. Walker gave me a <br></br> scrapbook Steph had made <br></br>for me.</p>
                        </div>
                    </Delay>



                    <Delay wait={9000}>
                        <div className="textTo3">
                            <TextTo></TextTo>
                            <p className="sentText">It was tough to get through <br></br> but after I read it<br></br>I realized something </p>
                        </div>
                    </Delay>



                    <Delay wait={12000}>
                        <div className="textTo4">
                            <TextTo></TextTo>
                            <p className="sentText">It's a piece of her that's <br></br> still her with us.<br></br>And I'm so grateful for that. </p>
                        </div>
                    </Delay>



                    <Delay wait={15000}>
                        <div className="sendTextEric">
                            <p className="textField">Thanks Eric! That helps a lot.</p>
                            <TextBox className="textingErictoFriend"/>
                        </div>
                    </Delay>



                    {/* <Delay wait={20000}>
                        <Redirect to="/friend"/>
                    </Delay> */}


            </div>
        )
    }
}
export default TextMomtoBoyfriend;