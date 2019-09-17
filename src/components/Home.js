import React from 'react'
import {ReactComponent as Funeral} from "../img/funeral.svg"
import Text from "../img/textBubble.png";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Funeral>
                    <img style={{zIndex: 1}} src={Text}/>
                </Funeral>
            </div>
        )
    }
}

export default Home;