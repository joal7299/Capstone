import React from 'react'
import  DragParent from './dropTest'
import Hover from "./Hover.js"

import {ReactComponent as Desk} from "../img/table.svg"
import {ReactComponent as Bed} from "../img/bed.svg"
import {ReactComponent as Trash} from "../img/trash.svg"
import {ReactComponent as Mom} from "../img/mom-alone.svg"
import Typed from 'react-typed'

import {ReactComponent as Letter} from "../img/letter-1.svg"
import {ReactComponent as Room} from "../img/RoomScene.svg"


class Parent extends React.Component {

    render() {
        var color = document.body.style.backgroundColor = "white";

        return (
            <div>
            <div className="stephanieBackground">
                <div className="typedSteph">
                    <Typed className="typedRoomSteph" strings={["this is my room.","what's my mom doing here?","she must be going through my old stuff", "look! it's my treasure chest under my bed.","I have stuff inside I wish my mom could see","it would help her understand some things", "maybe I can help her look around my room for the code to unlock my chest"]}
                           fadeOut={true}
                           typeSpeed={35}
                    />
                </div>
            </div>
                <Hover noHoverSvg={<Bed className="Bed"/>} hoverSvg={<Bed cursor="pointer" onClick={()=> window.location.href="Bed"} className="Bed"/>}/>
                <Hover noHoverSvg={<Desk className="Desk"/>} hoverSvg={<Desk cursor="pointer" onClick={()=> window.location.href="Desk"} className="Desk"/>}/>
                <Hover noHoverSvg={<Trash className="Trash"/>} hoverSvg={<Trash cursor="pointer" onClick={()=> window.location.href="Trash"} className="Trash"/>}/>
                <Mom className="momAlone"/>

                {/* <Room /> */}
            </div>

        );
    }
}


export default Parent;
