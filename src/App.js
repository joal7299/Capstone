import React from 'react'
import { Redirect } from 'react-router-dom'
import Typed from 'react-typed'
import './components/style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false
        };
    }

  render() {
      var color = document.body.style.backgroundColor = "black";
      return (
          <div style={{backgroundColor:"black"}}>
        <div className="typed" >
            <Typed className="typedIntro" strings={["...","what's going on??", "where am I, why do I feel so strange?", "the last thing I remember was driving in my car", "I saw headlights and...", "now I'm here.", "but where is here?"]}  fadeOutDelay= {500}
            typeSpeed={50} fadeOut={3000} onComplete={()=>{setTimeout(function() {this.setState({complete:true})}.bind(this),
                2000)}}
        />
            {this.state.complete == true &&
                <Redirect to="/home"/>
            }
        </div>
          </div>
  )
  }
}
export default App ;
