import React from 'react'
import Typed from "react-typed";
import Left from "../img/leftArrow.svg"
import Right from "../img/rightArrow.svg"
import Cover from "../img/SB-Cover.svg"
import S1 from "../img/SBPg1.svg"
import S2 from "../img/SBPg2.svg"
import S3 from "../img/SBPg3.svg"
import { Redirect } from 'react-router-dom'
import Delay from "react-delay"


class Boyfriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            i: 0,
            transparent: false,
        }
        this.scrapbookLeft = this.scrapbookLeft.bind(this);
        this.scrapbookRight = this.scrapbookRight.bind(this);

    }

    componentDidMount() {
        setTimeout(() => this.setState({ transparent: true }), 10);
    }

    scrapbookLeft = ()=> {
        if(this.state.i>=1) {
            this.setState({i:this.state.i-1});
        }
    }

    scrapbookRight = ()=> {
        if(0<=this.state.i<=2) {
            this.setState({i:this.state.i+1});
        }
    }
    render() {
        const scrapbook = [Cover, S1, S2, S3];
        return (
            <div>
                <div id="fadeIn" className={`fade ${this.state.transparent ? 'transparent' : ''}`}>
                {/* transparent background div */}
                </div>


                <Delay wait={1500}>
                    <div className="typedSteph">
                        <Typed className="typedRoomSteph" strings={["oh good, I'm glad my mom gave Eric that scrapbook.","I was hoping I could give him that myself.","I hope he can read it and maybe get a little closure.", "I really did love him so much."]}
                            fadeOut={true}
                            typeSpeed={35}
                        />
                    </div>
                </Delay>
                {/*{this.state.complete==true &&*/}
                {/*    <div className="typedSteph">*/}
                {/*        <Typed className="typedRoomSteph" strings={["oh good, I'm glad my mom gave Eric that scrapbook.","I was hoping I could give him that myself.","I hope he can read it and maybe get a little closure.", "I really did love him so much."]}*/}
                {/*               fadeOut={true}*/}
                {/*               typeSpeed={35}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    }*/}
                { this.state.i>0 &&
                <img className="leftArrowBoy" onClick={this.scrapbookLeft} src={Left}></img>
                }
                {this.state.i<4 &&
                <img className="rightArrowBoy" onClick={this.scrapbookRight} src={Right}></img>
                }
            <img className="scrapbook" src={scrapbook[this.state.i]}></img>
                {this.state.i>3 &&
                    <Redirect to="/textErictoFriend"/>
                }
            </div>
        )
    }
}

export default Boyfriend;