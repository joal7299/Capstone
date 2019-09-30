import React from 'react'
import Hover from "./Hover.js"
import {ReactComponent as Key} from '../img/code-key.svg'
import {ReactComponent as Back} from "../img/leftArrow.svg"

class Desk extends React.Component {
    render() {
        return (
            <div>
                <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Parent"} className="Back"/>}/>
                <Key className="key"/>   
            </div>
        )
    }
}

export default Desk;