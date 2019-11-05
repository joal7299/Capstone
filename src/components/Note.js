import React from 'react'
import {ReactComponent as Stephnote} from '../img/letter-1.svg'
import Hover from "./Hover.js"
import {ReactComponent as Room} from "../img/leftArrow.svg"

class Note extends React.Component {
    render() {
        return (
            <div>
                <Stephnote className="noteMom"/>
                <Hover noHoverSvg={<Room className="Home"/>} hoverSvg={<Room onClick={()=> window.location.href="TextMomtoBoyFriend"} className="Home"/>}/>
            </div>
        )
    }
}

export default Note;