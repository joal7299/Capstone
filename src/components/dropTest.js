import React from 'react';

import P1 from "../img/piece1.svg"
import P2 from "../img/piece2.svg"
import P3 from "../img/piece3.svg"
import P4 from "../img/piece4.svg"
import P5 from "../img/piece5.svg"
import P6 from "../img/piece6.svg"
import P7 from "../img/piece7.svg"
import P8 from "../img/piece8.svg"



class Piece1 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece1"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P1} alt="piece1">
          </img>
      </div> 
    )
  }
}
class Piece2 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece2"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P2} alt="piece1">
          </img>
      </div> 
    )
  }
}
class Piece3 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece3"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P3} alt="piece1">
          </img>
      </div> 
    )
  }
}
class Piece4 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece4"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P4} alt="piece1">
          </img>
      </div> 
    )
  }
}
class Piece5 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece5"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P5} alt="piece1">
          </img>
      </div> 
    )
  }
}
class Piece6 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece6"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P6} alt="piece1">
          </img>
      </div> 
    )
  }
}
class Piece7 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece7"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P7} alt="piece1">
          </img>
      </div> 
    )
  }
}
class Piece8 extends React.Component {
  constructor(props) {
    super(props);
    this.setDragging = props.setDragging;
    this.state = {
      x: props.startX,
      y: props.startY,
    };
  }
  setPosition(newX, newY) {
    this.setState({ x: newX - 50, y: newY - 50});
  }
  render() {
    return (
      // <div
      //   onMouseDown={() => this.setDragging(this)}
      //   style={{ position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px', background: 'red', width: '100px', height: '100px'}}>
      // </div>
      <div> 
        <img className="piece8"
          onMouseDown={() => this.setDragging(this)} 
          style={{position: 'absolute', left: this.state.x + 'px', top: this.state.y + 'px'}}
          src={P8} alt="piece1">
          </img>
      </div> 
    )
  }
}





class DragParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragTarget: null,
      isDragging: false,
    };
  }
  render() {

    const onMove = (e) => {
      if (this.state.isDragging) this.state.dragTarget.setPosition(e.clientX, e.clientY);
    }
    const onUp = () => this.setState({ isDragging: false, dragTarget: null });
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }} onMouseMove={onMove} onMouseUp={onUp}>
        <Piece1 startX={10} startY={390} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
        <Piece2 startX={220} startY={120} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
        <Piece3 startX={300} startY={390} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
        <Piece4 startX={450} startY={420} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
        <Piece5 startX={590} startY={510} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
        <Piece6 startX={600} startY={60} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
        <Piece7 startX={720} startY={270} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
        <Piece8 startX={810} startY={320} setDragging={(target) => this.setState({ isDragging: true, dragTarget: target })} />
      </div>
    )
  }
}
export default DragParent;












