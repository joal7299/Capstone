import React from 'react'
import Hover from "./Hover.js"
import {ReactComponent as Box} from '../img/box.svg'
import {ReactComponent as Back} from "../img/leftArrow.svg"
import {ReactComponent as Note} from "../img/letter-1.svg"


class Bed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            value2: "",
            value3: ""}
    
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange1 = (event) => {
        this.setState({value1: event.target.value});
      }
    handleChange2 = (event) => {
        this.setState({value2: event.target.value});
      }
    handleChange3 = (event) => {
        this.setState({value3: event.target.value});
      }
      handleSubmit(event) {
        if(this.state.value1 == "m" && this.state.value2 == "o" && this.state.value3 == "m"){
            window.location.href="Note";
        }
      }
      
    render() {
        return (
            <div>
                <h1 className="noteInstructions">Enter a 3-digit code</h1>
                <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Parent"} className="Back"/>}/>

                <Box className = "box"/>
                <input type="text" className="password1" onChange={this.handleChange1}/>
                <input type="text" className="password2" onChange={this.handleChange2}/>
                <input type="text" className="password3" onChange={this.handleChange3}/>
                <button className="button" onClick={this.handleSubmit()} />
            </div>
        )
    }
}

export default Bed;