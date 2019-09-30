import React from 'react'
import  DragParent from './dropTest'
import Hover from "./Hover.js"
//import Trash from ....
import {ReactComponent as Back} from "../img/leftArrow.svg"

class Trash extends React.Component {
    render() {
        return (
            <div>
                <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Parent"} className="Back"/>}/>
                <DragParent />
                {/* <Trash /> */}
            </div>
        )
    }
}

export default Trash;