import React from 'react'
import ReactDOM from 'react-dom'
import Lottie from 'react-lottie'
import animationData from './lotties/Square-test.json'
import { Redirect } from 'react-router-dom'
// import Typed from 'typed.js';
import Typed from 'react-typed'
import Button from "@material-ui/core/Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false
        };
    }

  render() {
      const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
          }
      };

    return (
        <div style={{textAlign: "center"}}>
            <Typed style={{fontSize: "3em", textAlign: "center"}} strings={['your name is Stephanie Walker', 'you are 22 years old','on September 5th, 2019, you were driving home', 'and from what seemed to be out of nowhere', 'you were hit and killed in a severe car accident', 'life would never be the same.', 'welcome to your funeral']}  fadeOutDelay= {500}
            typeSpeed={35} backSpeed={50} onComplete={()=>{this.setState({complete:true})}}
        />
            {this.state.complete == true &&
                <Redirect to="/home"/>
            }
            {/*<Lottie options={defaultOptions} height={400} width={400} />*/}
        </div>
  )
  }
}

export default App;

