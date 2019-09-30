import React from 'react'
import  DragParent from './dropTest'
import Hover from "./Hover.js"
//import Trash from ....
//import Back from ....

class Trash extends React.Component {
    render() {
        return (
            <div>
                {/* <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Back"} className="Back"/>}/> */}
                <DragParent />
                {/* <Trash /> */}
            </div>
        )
    }
}

export default Trash;