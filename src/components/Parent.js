import React from 'react'
import  DragParent from './dropTest'
import Hover from "./Hover.js"

import {ReactComponent as Desk} from "../img/table.svg"
import {ReactComponent as Bed} from "../img/bed.svg"
import {ReactComponent as Trash} from "../img/trash.svg"
import {ReactComponent as Home} from "../img/leftArrow.svg"

import {ReactComponent as Letter} from "../img/letter-1.svg"
import {ReactComponent as Room} from "../img/RoomScene.svg"


class Parent extends React.Component {
        
    render() {
        return (
            <div>
                <Hover noHoverSvg={<Bed className="Bed"/>} hoverSvg={<Bed onClick={()=> window.location.href="Bed"} className="Bed"/>}/>
                <Hover noHoverSvg={<Desk className="Desk"/>} hoverSvg={<Desk onClick={()=> window.location.href="Desk"} className="Desk"/>}/>
                <Hover noHoverSvg={<Trash className="Trash"/>} hoverSvg={<Trash onClick={()=> window.location.href="Trash"} className="Trash"/>}/>
                <Hover noHoverSvg={<Home className="Home"/>} hoverSvg={<Home onClick={()=> window.location.href="Home"} className="Home"/>}/>
                {/* <Room /> */}
                
                
            </div>

        );
    }
}


export default Parent;
