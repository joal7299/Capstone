import React from 'react'
import  DragParent from './dropTest'

import {ReactComponent as Letter} from "../img/letter.svg"


class Parent extends React.Component {
        constructor(props) {
            super(props);
            this.deskClose = this.deskClose.bind(this);
            this.bedClose = this.bedClose.bind(this);
            this.trashClose = this.trashClose.bind(this);
        }
        
        deskClose(){
            console.log("desk");
            
        }

        bedClose(){
            console.log("bed");
        }

        trashClose(){
            console.log("trash");
        }


        // paperGame(){
        //     const box = document.getElementsByClassName('box')[0]
        //     const containers = document.getElementsByClassName('holder')
        //     for(const container of containers) {
        //         container.addEventListener("dragover", dragover)
        //         container.addEventListener("dragenter", dragenter)
        //         container.addEventListener("drop", drop)
        //     }
        // }

        static init() {

            this.box = document.getElementsByClassName('puzzle')[0];
        
            this.box.addEventListener("dragstart", this.dragstart);
            this.box.addEventListener("dragend", this.dragend);
        
            const containers = document.getElementsByClassName('holder');
        
            for(const container of containers) {
              container.addEventListener("dragover", this.dragover);
              container.addEventListener("dragenter", this.dragenter);
              container.addEventListener("dragleave", this.dragleave);
              container.addEventListener("drop", this.drop);
            }
          }

          static dragstart() {
            this.className += " held";
          
            setTimeout(()=>this.className="invisible", 0);
          }
        
          static dragend() {
            this.className = "puzzle";
          }
        
          static dragover(e) {
            e.preventDefault();
          }
        
          static dragenter(e) {
            e.preventDefault();
            this.className += " hovered";
          }
        
          static dragleave() {
            this.className = "holder";
          }
        
          static drop() {
            this.className = "holder";
            this.append(this.box);
          }
        

        
        //document.addEventListener("DOMContentLoaded", App.init)

    render() {
        return (
            <div>
                <DragParent/>
                {/* <Letter /> */}
                
                

                {/* <div style={{position: "relative"}}>
                    <img style={{zIndex: 1, position: "absolute"}} src={Text} alt="Letter"/>
                    <Letter />
                    
                </div> */}


                {/* <div className="desk">
                    <button onClick={this.deskClose}>Click Me</button>
                </div>

                <div className="bed">
                    <button onClick={this.bedClose}>Click Me</button>
                </div>

                <div className="trash">
                
                    <button onClick={this.trashClose}>Click Me</button>

                    <div className="container">
                        <div className="holder">
                            <div className="puzzle" draggable="true">
                                <img src="puzzlePiece.png" alt="Smiley face" height="42" width="42"></img>
                            </div>

                            <div className="holder">

                            </div>
                        </div>
                    </div>

                    <div className="container">
                    </div>

                </div> */}
            </div>

        );
    }
}

//document.addEventListener("DOMContentLoaded", this.init)

export default Parent;
