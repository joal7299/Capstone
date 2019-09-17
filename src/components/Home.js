import React from 'react'
import {ReactComponent as Funeral} from "../img/funeral.svg"
import Text from "../img/textBubble.png";

class Home extends React.Component {
    render() {
        return (
            <div style={{position: "relative"}}>
                <img style={{zIndex: 1, position: "absolute"}} src={Text}/>
                <Funeral />
            </div>
        )
    }
}

export default Home;