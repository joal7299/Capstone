import React from 'react'
import {ReactComponent as Stephnote} from '../img/letter-1.svg'
import {ReactComponent as Scrapbook} from  '../img/SB-Cover.svg'
import { Redirect } from 'react-router-dom'
import Typed from "react-typed";

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stephTalk: false,
            complete: false
        }
        this.talk = this.talk.bind(this);
    }
    talk() {
        this.setState({stephTalk: true});
        console.log("here");
    }
    render() {
        return (
            <div>
                {this.state.stephTalk == true &&
                <div className="typedSteph">
                    <Typed className="typedFuneralSteph" strings={["that's the anniversary scrapbook I was making for Eric","I hope my mom can give that to him","he needs to know how much he meant to me"]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({complete: true})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }
                {/*<Hover noHoverSvg={<Room className="Back"/>} hoverSvg={<Room onClick={()=> window.location.href="TextMomtoBoyFriend"} className="Back"/>}/>*/}
                <Stephnote className="noteMom"/>
                <Scrapbook onClick={this.talk} className="hiddenScrapbook"/>
                {this.state.complete == true &&
                    <Redirect to="/parentfinished"/>
                }
            </div>
        )
    }
}

export default Note;