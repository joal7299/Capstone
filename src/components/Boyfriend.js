import React from 'react'
import Typed from "react-typed";

class Boyfriend extends React.Component {
    render() {
        return (
            <div>
                <div className="typedSteph">
                    <Typed className="typedRoomSteph" strings={["oh good, I'm glad my mom gave Eric that scrapbook.","I was hoping I could give him that myself.","I hope he can read it and maybe get a little closure.", "I really did love him so much."]}
                           fadeOut={true}
                           typeSpeed={35}
                    />
                </div>
            </div>
        )
    }
}

export default Boyfriend;