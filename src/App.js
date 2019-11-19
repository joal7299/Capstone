import React from 'react'
import { Redirect } from 'react-router-dom'
import Typed from 'react-typed'
import './components/style.css'
import Delay from "react-delay"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            transparent: false,
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ transparent: true }), 10);
    }

  render() {
      var color = document.body.style.backgroundColor = "black";
      return (
          
          <div style={{backgroundColor:"black"}}>
            <div id="fadeIn" className={`fade ${this.state.transparent ? 'transparent' : ''}`}>
                {/* transparent background div */}
            </div>

            <div className="typed">
               <Delay wait={2000}> 
                <Typed className="typedIntro" strings={["...","what's going on??", "where am I, why do I feel so strange?", "the last thing I remember was driving in my car", "I saw headlights and...", "now I'm here.", "but where is here?"]}  fadeOutDelay= {500}
                typeSpeed={50} fadeOut={3000} onComplete={()=>{setTimeout(function() {this.setState({complete:true})}.bind(this),
                    2000)}}
                />
               </Delay>

                {this.state.complete == true &&
                    <Redirect to="/home"/>
                }
            </div>
          </div>
  )
  }
}
export default App ;
