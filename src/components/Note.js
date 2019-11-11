import React from 'react'
import {ReactComponent as Stephnote} from '../img/letter-1.svg'
import Hover from "./Hover.js"
import {ReactComponent as Room} from "../img/leftArrow.svg"

class Note extends React.Component {
    render() {
        return (
            <div>
                <Hover noHoverSvg={<Room className="Back"/>} hoverSvg={<Room onClick={()=> window.location.href="TextMomtoBoyFriend"} className="Back"/>}/>
                <Stephnote className="noteMom"/>
            </div>
        )
    }
}

export default Note;