import React from 'react'
import  DragParent from './dropTest'
//import Trash from ....
//import Back from ....

class Trash extends React.Component {
    render() {
        return (
            <div>
                <h1>Trash</h1>
                <DragParent />
                {/* <Trash /> */}
            </div>
        )
    }
}

export default Trash;