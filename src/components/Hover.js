import React from 'react'
import {ReactComponent as Funeral} from "../img/background.svg"
import {ReactComponent as Gravestone} from "../img/gravestone-1.svg"
import {ReactComponent as Grey1} from "../img/grey1.svg"
import {ReactComponent as Person1} from "../img/person1.svg"
import {ReactComponent as Grey2} from "../img/grey2.svg"
import {ReactComponent as Person2} from "../img/person2.svg"
import {ReactComponent as Grey3} from "../img/grey3.svg"
import {ReactComponent as Person3} from "../img/person3.svg"
import {ReactComponent as Grey4} from "../img/grey4.svg"
import {ReactComponent as Person4} from "../img/person4.svg"
import {ReactComponent as Grey5} from "../img/grey5.svg"
import {ReactComponent as Person5} from "../img/person5.svg"
import Text from "../img/textBubble.png";
import Home from "./Home";

class Hover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
        this.hover = this.hover.bind(this);
        this.noHover = this.noHover.bind(this);
    }
    hover() {
        this.state.hover=true;
    }

    noHover() {
        this.state.hover=false;
    }
    render() {

        return (
            <div className="container">
                <div onMouseEnter={ ()=> this.setState({hover: true}) } onMouseLeave={ ()=> this.setState({hover: false}) }>
                    {this.state.hover ? this.props.hoverSvg && this.props.textBox && this.props.texts : this.props.noHoverSvg}
                        {/*<div className="confine">*/}
                        {/*    {normalPerson}*/}
                        {/*    /!*<img className="textBubbleGrey1" src={Text}/>*!/*/}
                        {/*    /!*<p className="textHomeGrey1">*!/*/}
                        {/*    /!*    I miss my sister. I don’t<br></br> know what I’ll do without<br></br> her; I’ve never had to try.*!/*/}
                        {/*    /!*</p>*!/*/}
                        {/*    /!*<Person1 className="person1"/>*!/*/}
                        {/*</div> :*/}
                        {/*<div>{this.props.noHover} className={greyPersonClass}*/}
                        {/*</div>*/}
                    }
                </div>
            </div>
        )}

}

export default Hover;

