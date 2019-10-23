import React from 'react'
import {ReactComponent as TextFrom} from "../img/text-from.svg"
import {ReactComponent as TextTo} from "../img/text-to.svg"
import lax from '../../node_modules/lax.js'
import Fade from 'react-reveal/Fade'


class TextMomtoFriend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Fade right>
                    <TextTo className="textTo"></TextTo>
                </Fade>
                <Fade left>
                    <TextFrom className="textFrom"></TextFrom>
                </Fade>
            </div>
        )
    }
}
export default TextMomtoFriend;