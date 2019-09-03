import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lotties/rain.json'
// import ReactBodymovinFull from 'react-bodymovin'
import LottieWeb from 'lottie-web'
class App extends React.Component {
  render() {
      const defaultOptions = LottieWeb.loadAnimation({
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
          }
      });
      // const bodymovinOptions = {
      //     loop: true,
      //     autoplay: true,
      //     prerender: true,
      //     animationData: animationData
      // };

    return (
        <div>
          <h1>The app!</h1>
            <Lottie options={defaultOptions} />
        </div>
    )
  }
}
export default App ;