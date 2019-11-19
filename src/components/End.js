import React from 'react'
import Typed from "react-typed";
import { Redirect } from 'react-router-dom'
import Delay from "react-delay"

class End extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            transparent: false,
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ transparent: true }), 10);
    }

    render() {
        var color = document.body.style.backgroundColor = "black";
        return (
            <div>
                <div id="fadeIn" className={`fade ${this.state.transparent ? 'transparent' : ''}`}>
                {/* transparent background div */}
                </div>
                
                <div className="typed">
                    <Delay wait={1000}>
                        <Typed className="typedEnd" strings={["I'm going to miss all of them so much.","I'm glad I got the chance to see them one more time.","It makes me feel better that they have each other to rely on,", "I just wish I had a little more time.", "I'm really thankful I was able to help them move on before I go.", "I'll see you all soon, I'm sure.","goodbye."]}
                            fadeOut={true}
                            typeSpeed={35} onComplete={()=>{setTimeout(function() {this.setState({complete:true})}.bind(this),
                            2000)}}
                        />
                    </Delay>
                    {this.state.complete==true &&
                        <Redirect to="/credits"/>
                    }
                </div>
            </div>
        )
    }
}

export default End;