import React from 'react'
import {ReactComponent as Funeral} from "../img/funeral.svg"
import Text from "../img/textBubble.png";

class Home extends React.Component {
    render() {
        return (
            <div>

                {/*<h1>Welcome!</h1>*/}
                {/*<img alt="initial screen" style={{ width: "100%", maxHeight: "90%", margin: "0", padding: "0"}} src={HomePic}/>*/}

                <Funeral>
                    <img style={{zIndex: 1}} src={Text}/>

                </Funeral>
            </div>
        )
    }
}

export default Home;