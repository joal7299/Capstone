import React from 'react'
import {ReactComponent as Room} from "../img/room.svg"


class StephaniesRoom extends React.Component {
    render() {
        return (
            <div style={{position: "relative"}}>
                <img style={{zIndex: 1, position: "absolute"}} src={Text}/>
                <Room />
            </div>
        )
    }
}

export default StephaniesRoom;