import React, { Component } from 'react';
import classes from './colorMatchingExercise.module.css';
import { SketchPicker, SliderPicker } from 'react-color'



class ColorMatchingExercise extends Component {
    constructor(props){
        super(props);
        this.state={
        background:"blue",
        counter:0,
        blockColor:{
            background: "blue",
            height: "215px",
            width: "275px",
            borderRadius: "25px",
            padding: "15px",
            margin: "25px"

        },
        colorArray:[
            "red","yellow","lime"," cyan","blue","purple"
        ]
        }
    }
    handleOnChangeComplete=(color)=>{
        this.setState({background:color.hex})
    }
    // checkColor=()=>{
    //     if(this.state.background===document.getElementsByClassName(classes.color1).background){
    //         this.setState({
    //             matched:"Color Matched",
    //         blockColor:{...this.state.blockColor, background:"green"}})
    //     }else(
    //         this.setState({
    //             matched:"Color didn't Matched Please Try Again",
    //             blockColor:{...this.state.blockColor, background:"green"}})
    //     )
    // }
    checkColor=()=>{
        if(this.state.counter <= 6){
            this.setState({
                blockColor:{...this.state.blockColor, background:this.state.colorArray[this.state.counter]}})
                console.log("in th loop"+this.state.counter)
                // break
        }
         this.state.counter++;
         if(this.state.counter>5){this.state.counter=0}
        console.log("outer"+this.state.counter)
            }
    render(){

        return (
            <div>
                  <body className={classes.topAlignment}>
                <div className="container">
                    <div className="row m-auto">
                    <div className="col-md-12">
                        <div className="well st shadow p-3 mb-5 rounded" className={classes.st}><h3 className="text-center">COLOR MATCHING GAME</h3>
                            <p className="text-center">1. Match the colors using the slider. If the colors match click the button! The result is displayed bellow.</p>
                            <p className="text-center">2. To get to the next level the average difference should be less than 8! It will be more and more difficult.</p>
                            <div className={classes.container}>
                                    <div className="col-md-12 text-center">
                                        <a href="./ColorBlind-Exercises">
                                            <button className={classes.btnLg}>Return to Exercises</button>
                                            </a>
                                    </div>
                                </div><br />
                        </div>
                    </div>
                </div>
                </div>
    
                <div className="container">
                <div className="row m-auto">
                    <div className="col-md-12">
                        <div className="well shadow rounded"className={classes.nd}><h4 className="text-center"></h4><br />
                                <div className="row" className={classes.in}>
                                    <div id="color1" className=" w-25 d-inline p-3" style={this.state.blockColor} className={this.state.blockColor}></div>
                                    <div className=" w-25 d-inline p-2" className={classes.block2} style={{background:this.state.background}}></div>
                                </div>
                                
                                <br />
                                {/* <!-- Progress bar --> */}
                                <SliderPicker color={this.state.background} onChangeComplete={this.handleOnChangeComplete}/><br />
                            {/* <div className={classes.slidecontainer}>
                                <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                                    <button className="btn btn-default" className={classes.btn1}>MACHTED! GET THE NEXT COLOR! </button>
                            </div> */}
                            <div className={classes.container}>
                                    <div className="col-md-12 text-center">
                                        {/* <a href="./ColorBlind-Exercises"> */}
                                            <button className={classes.btnLg} onClick={this.checkColor}>MACHTED! GET THE NEXT COLOR! </button>
                                            {/* </a> */}
                                    </div>
                                </div><br />
                        </div>
                    </div>
                </div>
                </div>
        </body>
            </div>
        )
    }

}

export default ColorMatchingExercise;
