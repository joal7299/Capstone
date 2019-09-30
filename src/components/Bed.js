import React from 'react'
import Hover from "./Hover.js"
import {ReactComponent as Box} from '../img/box.svg'
//import Bed from .....
//import Back from .....

class Bed extends React.Component {
    render() {
        return (
            <div>
                {/* <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Back"} className="Back"/>}/> */}
                {/* <bed /> */}
                <Box className = "box"/>
            </div>
        )
    }
}

export default Bed;