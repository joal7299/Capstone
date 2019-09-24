import React from 'react'
import {ReactComponent as Funeral} from "../img/background.svg"
import {ReactComponent as Gravestone} from "../img/gravestone.svg"
import {ReactComponent as Person1} from "../img/person1.svg"

import Text from "../img/textBubble.png";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
            hover5: false
        };
    }
    //
    // hoverMouseCoord(e) {
    //     if ((130%<e.screenX<180%)
    // }

    render() {
        return (
            <div>
                <div className="confine">
                    <img className="textBubbleHome" src={Text}/>
                    <p className="textHome">
                    </p>
                </div>
                    <Person1 className="grey1"/>
                    <Gravestone className="gravestone"/>
                    <Funeral className="funeral"/>
            </div>
        )
    }
}

export default Home;