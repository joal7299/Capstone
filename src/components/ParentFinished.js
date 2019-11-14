import React from 'react'
import  DragParent from './dropTest'
import Hover from "./Hover.js"

import {ReactComponent as Desk} from "../img/table.svg"
import {ReactComponent as Bed} from "../img/bed.svg"
import {ReactComponent as Trash} from "../img/trash.svg"
import Typed from 'react-typed'



class ParentFinished extends React.Component {

    render() {
        var color = document.body.style.backgroundColor = "white";
        return (
            <div>
                <div className="typedMom">
                    <Typed className="typedFuneralMom" strings={["Gosh, I miss her so much.","What a sweet letter,","I'm glad she didn't resent me for sometimes being overbearing.","I should check in on Eric and give him that scrapbook."]}
                           fadeOut={true}
                           typeSpeed={35}
                    />
                </div>
            </div>

        );
    }
}


export default ParentFinished;
