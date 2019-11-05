import React from 'react'
import Typed from "react-typed";
import Left from "../img/leftArrow.svg"
import Right from "../img/rightArrow.svg"
import Box from "../img/box.svg"
import Letter from "../img/letter.svg"
import Note from "../img/Phone.svg"

class Boyfriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            i: 0
        }
        this.scrapbookLeft = this.scrapbookLeft.bind(this);
        this.scrapbookRight = this.scrapbookRight.bind(this);

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
        const scrapbook = [Box, Letter, Note];
        return (
            <div>
                <div className="typedSteph">
                    <Typed className="typedRoomSteph" strings={["oh good, I'm glad my mom gave Eric that scrapbook.","I was hoping I could give him that myself.","I hope he can read it and maybe get a little closure.", "I really did love him so much."]}
                           fadeOut={true}
                           typeSpeed={35}
                    />
                </div>
                {this.state.complete==true &&
                    <div className="typedSteph">
                        <Typed className="typedRoomSteph" strings={["oh good, I'm glad my mom gave Eric that scrapbook.","I was hoping I could give him that myself.","I hope he can read it and maybe get a little closure.", "I really did love him so much."]}
                               fadeOut={true}
                               typeSpeed={35}
                        />
                    </div>
                    }
                { this.state.i>0 &&
                <img className="leftArrowBoy" onClick={this.scrapbookLeft} src={Left}></img>
                }
                {this.state.i < 4 &&
                <img className="rightArrowBoy" onClick={this.scrapbookRight} src={Right}></img>
                }
            <img src={scrapbook[this.state.i]}></img>

            </div>
        )
    }
}

export default Boyfriend;