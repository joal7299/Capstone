import React from 'react'
import  DragParent from './dropTest'
import Hover from "./Hover.js"

//import Bed from ....
//import Desk from ....
//import Trash from ....

import {ReactComponent as Letter} from "../img/letter-1.svg"
import {ReactComponent as Room} from "../img/RoomScene.svg"


class Parent extends React.Component {
        
    render() {
        return (
            <div>
                {/* <Hover noHoverSvg={<Bed className="Bed"/>} hoverSvg={<Bed onClick={()=> window.location.href="Bed"} className="Bed"/>}/>
                <Hover noHoverSvg={<Desk className="Desk"/>} hoverSvg={<Desk onClick={()=> window.location.href="Desk"} className="Desk"/>}/>
                <Hover noHoverSvg={<Trash className="Trash"/>} hoverSvg={<Trash onClick={()=> window.location.href="Trash"} className="Trash"/>}/> */}
                <Room />
                {/* <DragParent/> */}
                {/* <Letter /> */}
                
            </div>

        );
    }
}


export default Parent;
