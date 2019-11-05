import React from 'react'
import Typed from "react-typed";

class End extends React.Component {
    render() {
        var color = document.body.style.backgroundColor = "black";
        return (
            <div>
                <div className="typed">
                    <Typed className="typedIntro" strings={["I'm going to miss all of them so much.","I'm glad I got the chance to see them one more time.","It makes me feel better that they have each other to rely on,", "I just wish I had a little more time.", "I'm really thankful I was able to help the move on before I go.", "I'll see you all soon, I'm sure.","goodbye."]}
                           fadeOut={true}
                           typeSpeed={35}
                    />
                </div>
            </div>
        )
    }
}

export default End;