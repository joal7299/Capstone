import React from 'react'
import {ReactComponent as Funeral} from "../img/funeral.svg"
import Text from "../img/textBubble.png";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="confine">
                <img className="textBubbleHome" src={Text}/>
                <p className="textHome">I am sophie
                </p>
                </div>
                <Funeral />
            </div>
        )
    }
}

export default Home;