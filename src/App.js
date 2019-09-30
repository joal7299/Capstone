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
    return (
        <div className="typed" style={{textAlign: "center"}}>
            <Typed className="typedIntro" strings={['your name is Stephanie Walker', 'you are 22 years old','on September 5th, 2019, you were driving home', 'and from what seemed to be out of nowhere', 'you were hit and killed in a severe car accident', 'life would never be the same.', 'welcome to your funeral']}  fadeOutDelay= {500}
            typeSpeed={35} backSpeed={50} onComplete={()=>{setTimeout(function() {this.setState({complete:true})}.bind(this),
                2000)}}
        />
            {this.state.complete == true &&
                <Redirect to="/home"/>
            }
        </div>
  )
  }
}
export default App ;
