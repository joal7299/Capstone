import React from 'react'
import {ReactComponent as Home} from "../img/leftArrow.svg"
import Hover from "./Hover.js"

class Music extends React.Component {
    render() {
        return (
            <div>
                <h1>Music Game</h1>
                <Hover noHoverSvg={<Home className="Home"/>} hoverSvg={<Home cursor="pointer" onClick={()=> window.location.href="Friend"} className="Home"/>}/>
            </div>
        )
    }
}

export default Music;