import React from 'react'
import {ReactComponent as Funeral} from "../img/background.svg"
import {ReactComponent as Gravestone} from "../img/gravestone.svg"
import {ReactComponent as Grey1} from "../img/grey1.svg"
import {ReactComponent as Person1} from "../img/person1.svg"
import Text from "../img/textBubble.png";
import Parent from "./Parent";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
            hover5: false
        };
        this.hover1 = this.hover1.bind(this);
    }
    hover1() {
        console.log("here");
        this.setState(prevState => ({hover1: !prevState.hover1}));
        // this.state.hover1= true;
        // return(
        //     <Grey1 style={{visibility: "hidden"}}/>
        // );

    }
    render() {
        return (
            <div className="container">
                {/*{this.state.hover1 == true &&*/}
                {/*    <div>*/}
                {/*<div className="confine">*/}
                {/*    <img className="textBubbleGrey1" src={Text}/>*/}
                {/*    <p className="textHomeGrey1">*/}
                {/*        hello*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*    <Person1 />*/}
                {/*    </div>*/}
                {/*}*/}
                {/*{this.state.hover1 == false &&*/}
                {/*    <div>*/}
                    <Grey1 onMouseEnter={()=>{this.hover1()}} className="grey1"/>
                        {this.state.hover1 ==true &&
                            <div>
                            <div className="confine">
                                <img className="textBubbleGrey1" src={Text}/>
                                <p className="textHomeGrey1">
                                    hello
                                </p>
                            </div>
                            <Person1 className="person1"/>
                            </div>
                        }
                    {/*// }*/}
                    <Gravestone className="gravestone"/>
                    <Funeral/>
            </div>
        )
    }
}

export default Home;

