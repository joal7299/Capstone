import React from 'react'
import {ReactComponent as Funeral} from "../img/background.svg"
import {ReactComponent as Gravestone} from "../img/gravestone-1.svg"
import {ReactComponent as Grey1} from "../img/grey1.svg"
import {ReactComponent as Person1} from "../img/person1.svg"
import Hover from "./Hover.js"
import {ReactComponent as Grey2} from "../img/grey2.svg"
import {ReactComponent as Person2} from "../img/person2.svg"
import {ReactComponent as Grey3} from "../img/grey3.svg"
import {ReactComponent as Person3} from "../img/person3.svg"
import {ReactComponent as Grey4} from "../img/grey4.svg"
import {ReactComponent as Person4} from "../img/person4.svg"
import {ReactComponent as Grey5} from "../img/grey5.svg"
import {ReactComponent as Person5} from "../img/person5.svg"
import Text from "../img/textBubble.png";
//class hover -- pass it the components(grey1, person1) own state
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // hover1: false,
            // hover2: false,
            // hover3: false,
            // hover4: false,
            // hover5: false
        };
        // this.hover1 = this.hover1.bind(this);
        // this.hover2 = this.hover2.bind(this);
        // this.hover3 = this.hover3.bind(this);
        // this.hover4 = this.hover4.bind(this);
        // this.hover5 = this.hover5.bind(this);

    }
    // hover1() {
    //     this.setState(prevState => ({hover1: !prevState.hover1}));
    // }
    // hover2() {
    //     this.setState(prevState => ({hover2: !prevState.hover2}));
    // }
    // hover3() {
    //     this.setState(prevState => ({hover3: !prevState.hover3}));
    // }
    // hover4() {
    //     this.setState(prevState => ({hover4: !prevState.hover4}));
    // }
    // hover5() {
    //     this.setState(prevState => ({hover5: !prevState.hover5}));
    // }
    render() {
        return (
            <div className="container">
                <Hover noHoverSvg={<Grey1 className="grey1"/>} hoverSvg={<Person1 className="person1"/>} textBox={<img className="textBubbleGrey1" />} texts={<p className="textHomeGrey1" />}/>
                <Hover noHoverSvg={<Grey2 className="grey2"/>} hoverSvg={<Person2 className="person2"/>} textBox={<img className="textBubbleGrey2" />} texts={<p className="textHomeGrey2" />}/>
                <Hover noHoverSvg={<Grey3 className="grey3"/>} hoverSvg={<Person3 className="person3"/>} textBox={<img className="textBubbleGrey3" />} texts={<p className="textHomeGrey3" />}/>
                <Hover noHoverSvg={<Grey4 className="grey4"/>} hoverSvg={<Person4 className="person4"/>} textBox={<img className="textBubbleGrey4" />} texts={<p className="textHomeGrey4" />}/>
                <Hover noHoverSvg={<Grey5 className="grey5"/>} hoverSvg={<Person5 className="person5"/>} textBox={<img className="textBubbleGrey5" />} texts={<p className="textHomeGrey5" />}/>

                {/*    <div onMouseEnter={()=>{this.hover1()}} onMouseLeave={()=>{this.hover1()}}>*/}
                {/*        {this.state.hover1 ?*/}
                {/*            <div className="confine">*/}
                {/*                <img className="textBubbleGrey1" src={Text}/>*/}
                {/*                <p className="textHomeGrey1">*/}
                {/*                    I miss my sister. I don’t<br></br> know what I’ll do without<br></br> her; I’ve never had to try.*/}
                {/*                </p>*/}
                {/*            <Person1 className="person1"/>*/}
                {/*            </div> :*/}
                {/*            <Grey1 className="grey1"/>*/}
                {/*        }*/}
                {/*    </div>*/}

                {/*    <div onMouseEnter={()=>{this.hover2()}} onMouseLeave={()=>{this.hover2()}}>*/}
                {/*        {this.state.hover2 ?*/}
                {/*            <div className="confine">*/}
                {/*                <img className="textBubbleGrey2" src={Text}/>*/}
                {/*                <p className="textHomeGrey2">*/}
                {/*                    hello*/}
                {/*                </p>*/}
                {/*                <Person2 className="person2"/>*/}
                {/*            </div> :*/}
                {/*            <Grey2 className="grey2"/>*/}
                {/*        }*/}
                {/*    </div>*/}

                {/*<div onMouseEnter={()=>{this.hover3()}} onMouseLeave={()=>{this.hover3()}}>*/}
                {/*    {this.state.hover3 ?*/}
                {/*        <div className="confine">*/}
                {/*            <img className="textBubbleGrey3" src={Text}/>*/}
                {/*            <p className="textHomeGrey3">*/}
                {/*                All I see when I close my <br></br>eyes*/}
                {/*                is Stephanie. I can still<br></br>*/}
                {/*                hear my best friends laugh.*/}
                {/*            </p>*/}
                {/*            <Person3 className="person3"/>*/}
                {/*        </div> :*/}
                {/*        <Grey3 className="grey3"/>*/}
                {/*    }*/}
                {/*</div>*/}

                {/*<div onMouseEnter={()=>{this.hover4()}} onMouseLeave={()=>{this.hover4()}}>*/}
                {/*    {this.state.hover4 ?*/}
                {/*        <div className="confine">*/}
                {/*            <img className="textBubbleGrey4" src={Text}/>*/}
                {/*            <p className="textHomeGrey4">*/}
                {/*                hello*/}
                {/*            </p>*/}
                {/*            <Person4 className="person4"/>*/}
                {/*        </div> :*/}
                {/*        <Grey4 className="grey4"/>*/}
                {/*    }*/}
                {/*</div>*/}

                {/*<div onMouseEnter={()=>{this.hover5()}} onMouseLeave={()=>{this.hover5()}}>*/}
                {/*    {this.state.hover5 ?*/}
                {/*        <div className="confine">*/}
                {/*            <img className="textBubbleGrey5" src={Text}/>*/}
                {/*            <p className="textHomeGrey5">*/}
                {/*                I can’t believe it, I feel so <br></br> guilty. I don’t know what I <br></br>can do to make this right.*/}
                {/*            </p>*/}
                {/*            <Person5 className="person5"/>*/}
                {/*        </div> :*/}
                {/*        <Grey5 className="grey5"/>*/}
                {/*    }*/}
                {/*</div>*/}
                    <Gravestone className="gravestone"/>
                    <Funeral/>
            </div>
        )
    }
}

export default Home;

