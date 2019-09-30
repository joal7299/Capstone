import React from 'react'
import {ReactComponent as Stephnote} from '../img/letter-1.svg'
import Hover from "./Hover.js"
//import Back ....

class Note extends React.Component {
    render() {
        return (
            <div>
                <h1>Note</h1>
                <Stephnote />
            </div>
        )
    }
}

export default Note;