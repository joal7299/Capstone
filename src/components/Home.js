import React from 'react'
import {ReactComponent as Funeral} from "../img/background.svg"
import {ReactComponent as Gravestone} from "../img/gravestone-1.svg"
import {ReactComponent as Grey1} from "../img/grey1.svg"
import {ReactComponent as Person1} from "../img/person1.svg"
import {ReactComponent as Boyfriend} from "../img/boyfriend.svg"
import {ReactComponent as Friend} from "../img/bestfriend.svg"
import {ReactComponent as Mom} from "../img/mom.svg"
import Typed from 'react-typed'
import "animate.css/animate.min.css"
import { Redirect } from 'react-router-dom'

import ScrollAnimation from "react-animate-on-scroll"

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
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            momTalk:false,
            momLin:0,
            boyTalk:false,
            boyLin:0,
            friendTalk:false,
            friendLin:0,
            stephTalk: true,
            stephLin:0,
            complete:false
            // mom: {talking: true, linNum: 0},
            // boyfriend: {talking: false, linNum: 0},
            // friend: {talking: false, linNum:0}
        };
    }
    render() {
        var color = document.body.style.backgroundColor = "black";
        return (
            <div className="funeral">
                { this.state.momTalk==true && this.state.momLin==0 &&
                    <div className="typedMom">
                        <Typed className="typedFuneralMom" strings={['Thanks so much for coming today',"It means a lot to me and I'm sure it would mean a lot to Stephanie"]}
                               fadeOut={true}
                               typeSpeed={35} onComplete={() => {
                            setTimeout(function () {
                                    this.setState({friendTalk: false, momTalk:false, momLin:1, stephTalk:true, boyTalk: false})
                                }.bind(this),
                                2000)
                        }}
                        />
                    </div>
                }

                { this.state.momTalk==true && this.state.momLin==1 &&
                <div className="typedMom">
                    <Typed className="typedFuneralMom" strings={["Stephanie meant everything to me."," After her father died she was all I had"," I wanted to protect her more than anything.", " I remember when she was young,", "all she wanted to do was become a rock climber.","I told her no, that it was too dangerous."," I wish I would have let her and not been so concerned.", " I regret not letting her make her own choices,"," I just held her back from doing what she wanted most."]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({friendTalk: true, momTalk:false, momLin:2, stephTalk:false, boyTalk: false})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }

                {this.state.friendTalk == true && this.state.friendLin==0 &&
                    <div className="typedFriend">
                        <Typed className="typedFuneralFriend" strings={["Oh Mrs. Walker, I’m sure Stephanie didn’t see it that way.", "I miss her so much.", " I miss all the things that we used to do together,", "now it feels like I can’t enjoy them without my best friend."," I just wish we could listen to our favorite songs","and talk about everything and anything.","I love you Steph."]}
                               fadeOut={true}
                               typeSpeed={35} onComplete={() => {
                            setTimeout(function () {
                                    this.setState({momTalk: false, friendTalk: false, friendLin:1, boyTalk: true, stephTalk:false})
                                }.bind(this),
                                2000)
                        }}
                        />
                    </div>
                }
                {this.state.boyTalk == true && this.state.boyLin==0 &&
                <div className="typedBoy">
                    <Typed className="typedFuneralBoy" strings={["I just never imagined something like this could happen to her", "The last time we talked we fought about our relationship."," I’ve always been bad at expressing my emotions,"," especially towards the ones I love the most.","I wish I could tell her that she meant more to me than anything.", "She was my entire world, and now she’s gone."]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({momTalk: false, friendTalk: false, boyLin:1, boyfriendTalk: false, stephTalk:true})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }
                <Boyfriend className={this.state.boyTalk ? "grey2" : "grey2O"}/>
                <Friend className={this.state.friendTalk ? "grey3" : "grey3O"}/>
                <Mom className={this.state.momTalk ? "grey4" : "grey4O"}/>
                <Gravestone className="gravestone"/>

                {this.state.stephTalk==true && this.state.stephLin==0 &&
                <div className="typedSteph">
                    <Typed className="typedFuneralSteph" strings={["who are these people?", "Mom! Eric! Kelly!", "Hello?!  can anyone hear me?"]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({friendTalk: false, momTalk:true, stephTalk:false, stephLin:1, boyTalk: false})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }
                {this.state.stephTalk==true && this.state.stephLin==1 &&
                <div className="typedSteph">
                    <Typed className="typedFuneralSteph" strings={["why are you talking about me like I'm.. dead."]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({friendTalk: false, momTalk:true, stephTalk: false, stephLin:2, boyTalk: false})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }
                {this.state.stephTalk==true && this.state.stephLin==2 &&
                <div className="typedSteph">
                    <Typed className="typedFuneralSteph" strings={[" I wish I could reach out and touch them,","hug them","let them know that it's okay.","I don’t regret a single second with them.","I wish there was some way I could help them move on."]}
                           fadeOut={true}
                           typeSpeed={35} onComplete={() => {
                        setTimeout(function () {
                                this.setState({complete:true})
                            }.bind(this),
                            2000)
                    }}
                    />
                </div>
                }
                {this.state.complete == true &&
                <Redirect to="/parent"/>
                }
                <Funeral/>

            </div>
        )
    }
}

export default Home;

