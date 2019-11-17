import React from 'react'
import  DragParent from './dropTest'
import Hover from "./Hover.js"
import { Redirect } from 'react-router-dom'
import {ReactComponent as Mom} from "../img/mom-on-phone.svg"
import {ReactComponent as Desk} from "../img/table.svg"
import {ReactComponent as Bed} from "../img/bed.svg"
import {ReactComponent as Trash} from "../img/trash.svg"
import Typed from 'react-typed'



class ParentFinished extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
        }
    }
    render() {
        var color = document.body.style.backgroundColor = "white";
        return (
            <div>
                <div className="typedMom">
                    <Typed className="typedFuneralMom" strings={["Gosh, I miss her so much.","What a sweet letter,","I'm glad she didn't resent me for sometimes being overbearing.","I should check in on Eric and give him that scrapbook."]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({complete: true})
                            }.bind(this),
                            2000) }}
                    />
                </div>
                <Bed className="Bed"/>
                <Desk className="Desk"/>
                <Trash className="Trash"/>
                <Mom className="momAlone"/>
                {this.state.complete==true &&
                    <Redirect to={"/textMomtoBoyfriend"}/>
                }
            </div>

        );
    }
}


export default ParentFinished;
