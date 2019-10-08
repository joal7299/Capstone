import React from 'react'

import Hover from "./Hover.js"

import {ReactComponent as BusStop} from "../img/table.svg"
import {ReactComponent as Home} from "../img/leftArrow.svg"

class Friend extends React.Component {
    render() {
        return (
            <div>
                <h1>Friend</h1>
                <Hover noHoverSvg={<BusStop className="Desk"/>} hoverSvg={<BusStop cursor="pointer" onClick={()=> window.location.href="musicGame"} className="Desk"/>}/>
                <Hover noHoverSvg={<Home className="Home"/>} hoverSvg={<Home cursor="pointer" onClick={()=> window.location.href="Home"} className="Home"/>}/>
            </div>
        )
    }
}

export default Friend;