import React from 'react'
import Hover from "./Hover.js"
import {ReactComponent as Key} from '../img/code-key.svg'
import {ReactComponent as Back} from "../img/leftArrow.svg"
import Typed from "react-typed";

class Desk extends React.Component {
    render() {
        return (
            <div>
                <div className="typedSteph">
                    <Typed className="typedRoomSteph" strings={["looks like the key to a code"]}
                           fadeOut={true}
                           typeSpeed={35}
                    />
                </div>
                <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Parent"} className="Back"/>}/>
                <Key className="key"/>   
            </div>
        )
    }
}

export default Desk;