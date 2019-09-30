import React from 'react'
import Hover from "./Hover.js"
import {ReactComponent as Box} from '../img/box.svg'
import {ReactComponent as Back} from "../img/leftArrow.svg"
import {ReactComponent as Note} from "../img/letter-1.svg"


class Bed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        // if(this.state.value == 'mom'){
        //     <Note />
        // }
        event.preventDefault();
      }
      
    render() {
        return (
            <div>
                <Hover noHoverSvg={<Back className="Back"/>} hoverSvg={<Back onClick={()=> window.location.href="Parent"} className="Back"/>}/>
                {/* <bed /> */}
                <Box className = "box"/>
                <form onSubmit={this.handleSubmit}>
                        <label>
                            Passcode:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Bed;