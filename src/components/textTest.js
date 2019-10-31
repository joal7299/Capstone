import React from 'react'
import Typed from 'react-typed'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Text extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            complete: false
        };
    }

  render() {
    return (
        <div style={{textAlign: "center"}}>

            <ScrollAnimation animateIn="fadeIn">
                <p>your name is Stephanie Walker', 'you are 22 years old','on September 5th, 2019, you were driving home', 'and from what seemed to be out of nowhere', 'you were hit and killed in a severe car accident', 'life would never be the same.', 'welcome to your funeral</p>
            </ScrollAnimation>


            {/* <Typed className="typedIntro" strings={['your name is Stephanie Walker', 'you are 22 years old','on September 5th, 2019, you were driving home', 'and from what seemed to be out of nowhere', 'you were hit and killed in a severe car accident', 'life would never be the same.', 'welcome to your funeral']}  fadeOutDelay= {500}
            typeSpeed={35} backSpeed={50} />

            
                
            <Typed className="typedIntro" strings={['test, test, test... school blows']}  fadeOutDelay= {500}
            typeSpeed={35} backSpeed={50} onComplete={()=>{setTimeout(function() {this.setState({complete:true})}.bind(this),
            2000)}}
            /> */}
            
            
            {this.state.complete == true &&
                <Redirect to="/home"/>
            }
        </div>
  )
  }
}
export default Text ;