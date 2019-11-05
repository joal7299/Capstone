import React from 'react'

class Credits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false
        }
    }

    render() {
        var color = document.body.style.backgroundColor = "white";
        return (
            <div>
                <h1>Credits</h1>
                <p className="credits">Created by Sophie Foster, Jonathan Allen and Lisa Pope</p>
                <br></br>
                <h2>Fireworks and Character Graphics from:</h2>
                <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by pikisuperstar - www.freepik.com</a>
                <br></br>
                <a href="https://www.freepik.com/free-photos-vectors/abstract">Abstract vector created by freepik - www.freepik.com</a>

            </div>
        )
    }
}

export default Credits;