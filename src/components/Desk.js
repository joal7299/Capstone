import React from 'react'
import Hover from "./Hover.js"
import {ReactComponent as Key} from '../img/code-key.svg'
//import Back from .....

class Desk extends React.Component {
    render() {
        return (
            <div>
                {/* <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Back"} className="Back"/>}/> */}
                <Key className="key"/>
            </div>
        )
    }
}

export default Desk;