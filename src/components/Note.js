import React from 'react'
import {ReactComponent as Stephnote} from '../img/letter-1.svg'

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