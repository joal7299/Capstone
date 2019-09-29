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
                    {this.state.hover ? <div>{this.props.hoverSvg}<div className="confine">{this.props.textBox}{this.props.texts}</div></div> : this.props.noHoverSvg}
                </div>
            </div>
        )}

}

export default Hover;

