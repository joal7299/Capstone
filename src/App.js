import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lotties/Square-test.json'
import Typed from 'typed.js';

class App extends React.Component {
  render() {
      // const defaultOptions = {
      //     loop: true,
      //     autoplay: true,
      //     animationData: animationData,
      //     rendererSettings: {
      //         preserveAspectRatio: 'xMidYMid slice'
      //     }
      // };

    return (
        <div>
          <h1>The app!</h1>
            {/*<Lottie options={defaultOptions} height={400} width={400} />*/}
        </div>
    )
  }
}
export default App;