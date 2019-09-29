import React from 'react'
import {ReactComponent as Funeral} from "../img/background.svg"
import {ReactComponent as Gravestone} from "../img/gravestone-1.svg"
import {ReactComponent as Grey1} from "../img/grey1.svg"
import {ReactComponent as Person1} from "../img/person1.svg"
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
    render() {
        return (
            <div className="container">
                <Hover noHoverSvg={<Grey1 className="grey1"/>} hoverSvg={<Person1 onClick={()=> window.location.href="Sister"} className="person1"/>} textBox={<img src={Text} className="textBubbleGrey1" />} texts={<p className="textHomeGrey1">I miss my sister. I don’t<br></br> know what I’ll do without<br></br> her; I’ve never had to try.</p>}/>
                <Hover noHoverSvg={<Grey2 className="grey2"/>} hoverSvg={<Person2 onClick={()=> window.location.href="Boyfriend"} className="person2"/>} textBox={<img src={Text} className="textBubbleGrey2" />} texts={<p className="textHomeGrey2">We were starting to build<br></br> our lives together. Now she’s <br></br> gone, I'm heartbroken. </p>}/>
                <Hover noHoverSvg={<Grey3 className="grey3"/>} hoverSvg={<Person3 onClick={()=> window.location.href="Friend"} className="person3"/>} textBox={<img src={Text} className="textBubbleGrey3" />} texts={<p className="textHomeGrey3">All I see when I close my <br></br>eyes is Stephanie. I can still<br></br> hear my best friends laugh.</p>}/>
                <Hover noHoverSvg={<Grey4 className="grey4"/>} hoverSvg={<Person4 onClick={()=> window.location.href="Parent"} className="person4"/>} textBox={<img src={Text} className="textBubbleGrey4" />} texts={<p className="textHomeGrey4">My baby girl Stephanie<br></br> is gone, I just don’t know<br></br> what I’m going to do.</p>}/>
                <Hover noHoverSvg={<Grey5 className="grey5"/>} hoverSvg={<Person5 onClick={()=> window.location.href="Driver"} className="person5"/>} textBox={<img src={Text} className="textBubbleGrey5" />} texts={<p className="textHomeGrey5">I can’t believe it, I feel so <br></br> guilty. I don’t know what I <br></br>can do to make this right. </p>}/>
                <Gravestone className="gravestone"/>
                <Funeral/>
            </div>
        )
    }
}

export default Home;

