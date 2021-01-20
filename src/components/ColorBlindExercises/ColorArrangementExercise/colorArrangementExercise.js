import React, { Component } from 'react';
import classes from "./colorArrangementExercise.module.css";



class colorArrangementExercise extends Component {
    
    constructor(props){
        super(props);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.redGreenCheck = this.redGreenCheck.bind(this);
        this.protan = this.protan.bind(this);
        this.state = {
                bg1:"#296000",
                bg2:"#785300",
                bg3:"#005a00",
                bg4:"#605900",
                bg5:"#884100",
                bg6:"#406000",
                bg7:"#556000",
                bg8:"#156000",
                bg9:"#8e2200",
                bg11:"#960000",
                name:"",
                clicked: false,
                redGreenButton: true,
                protanButton: false,
                deutanButton: false,
                tritanButton: false,
                result: false
        }
    }
    redGreen=()=>{
        document.getElementById("b11").style.backgroundColor = "#960000";
        document.getElementById("b12").style.backgroundColor = "white";
        document.getElementById("b13").style.backgroundColor = "white";
        document.getElementById("b14").style.backgroundColor = "white";
        document.getElementById("b15").style.backgroundColor = "white";
        document.getElementById("b16").style.backgroundColor = "white";
        document.getElementById("b17").style.backgroundColor = "white";
        document.getElementById("b18").style.backgroundColor = "white";
        document.getElementById("b19").style.backgroundColor = "white";
        document.getElementById("b20").style.backgroundColor = "white";
        this.setState({
            bg1:"#296000",
            bg2:"#785300",
            bg3:"#005a00",
            bg4:"#605900",
            bg5:"#884100",
            bg6:"#406000",
            bg7:"#556000",
            bg8:"#156000",
            bg9:"#8e2200",
            redGreenButton: true,
            protanButton: false,
            deutanButton: false,
            tritanButton: false,
            result: false
        })
    }
    protan=()=>{
        document.getElementById("b11").style.backgroundColor = "rgb(0, 0, 150)";
        document.getElementById("b12").style.backgroundColor = "white";
        document.getElementById("b13").style.backgroundColor = "white";
        document.getElementById("b14").style.backgroundColor = "white";
        document.getElementById("b15").style.backgroundColor = "white";
        document.getElementById("b16").style.backgroundColor = "white";
        document.getElementById("b17").style.backgroundColor = "white";
        document.getElementById("b18").style.backgroundColor = "white";
        document.getElementById("b19").style.backgroundColor = "white";
        document.getElementById("b20").style.backgroundColor = "white";
        this.setState({
            bg1:"rgb(72, 0, 88)",
            bg2:"rgb(36, 0, 120)",
            bg3:"rgb(63, 0, 96)",
            bg4:"rgb(27, 0, 128)",
            bg5:"rgb(80, 0, 80)",
            bg6:"rgb(54, 0, 104)",
            bg7:"rgb(9, 0, 144)",
            bg8:"rgb(45, 0, 112)",
            bg9:"rgb(18, 0, 136)",
            redGreenButton: false,
            protanButton: true,
            deutanButton: false,
            tritanButton: false,
            result: false
        })
    }
    deutan=()=>{
        document.getElementById("b11").style.backgroundColor = "rgb(120, 120, 120)";
        document.getElementById("b12").style.backgroundColor = "white";
        document.getElementById("b13").style.backgroundColor = "white";
        document.getElementById("b14").style.backgroundColor = "white";
        document.getElementById("b15").style.backgroundColor = "white";
        document.getElementById("b16").style.backgroundColor = "white";
        document.getElementById("b17").style.backgroundColor = "white";
        document.getElementById("b18").style.backgroundColor = "white";
        document.getElementById("b19").style.backgroundColor = "white";
        document.getElementById("b20").style.backgroundColor = "white";
        this.setState({
            bg1:"rgb(13, 145, 13)",
            bg2:"rgb(65, 132, 65)",
            bg3:"rgb(26, 141, 26)",
            bg4:"rgb(78, 129, 78)",
            bg5:"rgb(0, 150, 0)",
            bg6:"rgb(39, 138, 39)",
            bg7:"rgb(104, 123, 104)",
            bg8:"rgb(53, 135, 53)",
            bg9:"rgb(91, 126, 91)",
            redGreenButton: false,
            protanButton: false,
            deutanButton: true,
            tritanButton: false,
            result: false
        })
    }
    tritan=()=>{
        document.getElementById("b11").style.backgroundColor = "background: rgb(150, 0, 0)";
        document.getElementById("b12").style.backgroundColor = "white";
        document.getElementById("b13").style.backgroundColor = "white";
        document.getElementById("b14").style.backgroundColor = "white";
        document.getElementById("b15").style.backgroundColor = "white";
        document.getElementById("b16").style.backgroundColor = "white";
        document.getElementById("b17").style.backgroundColor = "white";
        document.getElementById("b18").style.backgroundColor = "white";
        document.getElementById("b19").style.backgroundColor = "white";
        document.getElementById("b20").style.backgroundColor = "white";
        this.setState({
            bg1:"rgb(150, 0, 136)",
            bg2:"rgb(150, 0, 68)",
            bg3:"rgb(150, 0, 119)",
            bg4:"rgb(150, 0, 51)",
            bg5:"rgb(150, 0, 150)",
            bg6:"rgb(150, 0, 102)",
            bg7:"rgb(150, 0, 17)",
            bg8:"rgb(150, 0, 85)",
            bg9:"rgb(150, 0, 34)",
            redGreenButton: false,
            protanButton: false,
            deutanButton: false,
            tritanButton: true,
            result: false
        })
    }

    onChangeColor(event){
        var id = event.target.id;
        this.setState({
            name : document.getElementById(id).style.backgroundColor
        })
        console.log(this.state.name)
    }

    onPasteColor=(event)=>{
        var id = event.target.id;
        document.getElementById(id).style.backgroundColor = this.state.name
    }

    checkAnswer=()=>{
        this.redGreenCheck();
        this.protanCheck();
        this.deutanCheck();
        this.tritanCheck();
    }

    redGreenCheck=()=>{
        let b12 =document.getElementById("b12").style.backgroundColor
        let b13 =document.getElementById("b13").style.backgroundColor
        let b14 =document.getElementById("b14").style.backgroundColor
        let b15 =document.getElementById("b15").style.backgroundColor
        let b16 =document.getElementById("b16").style.backgroundColor
        let b17 =document.getElementById("b17").style.backgroundColor
        let b18 =document.getElementById("b18").style.backgroundColor
        let b19 =document.getElementById("b19").style.backgroundColor
        let b20 =document.getElementById("b20").style.backgroundColor
        if(b12 == "rgb(142, 34, 0)"){console.log("true")}else{ document.getElementById("b12").style.backgroundColor = "white"}
        if(b13 == "rgb(136, 65, 0)"){console.log("true")}else{ document.getElementById("b13").style.backgroundColor = "white"}
        if(b14 == "rgb(120, 83, 0)"){console.log("true")}else{ document.getElementById("b14").style.backgroundColor = "white"}
        if(b15 == "rgb(96, 89, 0)"){console.log("true")}else{ document.getElementById("b15").style.backgroundColor = "white"}
        if(b16 == "rgb(85, 96, 0)"){console.log("true")}else{ document.getElementById("b16").style.backgroundColor = "white"}
        if(b17 == "rgb(64, 96, 0)"){console.log("true")}else{ document.getElementById("b17").style.backgroundColor = "white"}
        if(b18 == "rgb(41, 96, 0)"){console.log("true")}else{ document.getElementById("b18").style.backgroundColor = "white"}
        if(b19 == "rgb(21, 96, 0)"){console.log("true")}else{ document.getElementById("b19").style.backgroundColor = "white"}
        if(b20 == "rgb(0, 90, 0)"){console.log("true")}else{ document.getElementById("b20").style.backgroundColor = "white"}
        if(b12 == "rgb(142, 34, 0)" && b13 == "rgb(136, 65, 0)" && b14 == "rgb(120, 83, 0)" && b15 == "rgb(96, 89, 0)" && b16 == "rgb(85, 96, 0)" && b17 == "rgb(64, 96, 0)" && b18 == "rgb(41, 96, 0)" && b19 == "rgb(21, 96, 0)" && b20 == "rgb(0, 90, 0)"){
            this.setState({
                result:true
            })
        }
    }
    protanCheck=()=>{
        let b12 =document.getElementById("b12").style.backgroundColor
        let b13 =document.getElementById("b13").style.backgroundColor
        let b14 =document.getElementById("b14").style.backgroundColor
        let b15 =document.getElementById("b15").style.backgroundColor
        let b16 =document.getElementById("b16").style.backgroundColor
        let b17 =document.getElementById("b17").style.backgroundColor
        let b18 =document.getElementById("b18").style.backgroundColor
        let b19 =document.getElementById("b19").style.backgroundColor
        let b20 =document.getElementById("b20").style.backgroundColor
        if(b12 == "rgb(9, 0, 144)"){console.log("true")}else{ document.getElementById("b12").style.backgroundColor = "white"}
        if(b13 == "rgb(18, 0, 136)"){console.log("true")}else{ document.getElementById("b13").style.backgroundColor = "white"}
        if(b14 == "rgb(27, 0, 128)"){console.log("true")}else{ document.getElementById("b14").style.backgroundColor = "white"}
        if(b15 == "rgb(36, 0, 120)"){console.log("true")}else{ document.getElementById("b15").style.backgroundColor = "white"}
        if(b16 == "rgb(45, 0, 112)"){console.log("true")}else{ document.getElementById("b16").style.backgroundColor = "white"}
        if(b17 == "rgb(54, 0, 104)"){console.log("true")}else{ document.getElementById("b17").style.backgroundColor = "white"}
        if(b18 == "rgb(63, 0, 96)"){console.log("true")}else{ document.getElementById("b18").style.backgroundColor = "white"}
        if(b19 == "rgb(72, 0, 88)"){console.log("true")}else{ document.getElementById("b19").style.backgroundColor = "white"}
        if(b20 == "rgb(80, 0, 80)"){console.log("true")}else{ document.getElementById("b20").style.backgroundColor = "white"}
        if(b12 == "rgb(9, 0, 144)" && b13 == "rgb(18, 0, 136)" && b14 == "rgb(27, 0, 128)" && b15 == "rgb(36, 0, 120)" && b16 == "rgb(45, 0, 112)" && b17 == "rgb(54, 0, 104)" && b18 == "rgb(63, 0, 96)" && b19 == "rgb(72, 0, 88)" && b20 == "rgb(80, 0, 80)"){
            this.setState({
                result:true
            })
        }
    }
    deutanCheck=()=>{
        let b12 =document.getElementById("b12").style.backgroundColor
        let b13 =document.getElementById("b13").style.backgroundColor
        let b14 =document.getElementById("b14").style.backgroundColor
        let b15 =document.getElementById("b15").style.backgroundColor
        let b16 =document.getElementById("b16").style.backgroundColor
        let b17 =document.getElementById("b17").style.backgroundColor
        let b18 =document.getElementById("b18").style.backgroundColor
        let b19 =document.getElementById("b19").style.backgroundColor
        let b20 =document.getElementById("b20").style.backgroundColor
        if(b12 == "rgb(104, 123, 104)"){console.log("true")}else{ document.getElementById("b12").style.backgroundColor = "white"}
        if(b13 == "rgb(91, 126, 91)"){console.log("true")}else{ document.getElementById("b13").style.backgroundColor = "white"}
        if(b14 == "rgb(78, 129, 78)"){console.log("true")}else{ document.getElementById("b14").style.backgroundColor = "white"}
        if(b15 == "rgb(65, 132, 65)"){console.log("true")}else{ document.getElementById("b15").style.backgroundColor = "white"}
        if(b16 == "rgb(53, 135, 53)"){console.log("true")}else{ document.getElementById("b16").style.backgroundColor = "white"}
        if(b17 == "rgb(39, 138, 39)"){console.log("true")}else{ document.getElementById("b17").style.backgroundColor = "white"}
        if(b18 == "rgb(26, 141, 26)"){console.log("true")}else{ document.getElementById("b18").style.backgroundColor = "white"}
        if(b19 == "rgb(13, 145, 13)"){console.log("true")}else{ document.getElementById("b19").style.backgroundColor = "white"}
        if(b20 == "rgb(0, 150, 0)"){console.log("true")}else{ document.getElementById("b20").style.backgroundColor = "white"}
        if(b12 == "rgb(104, 123, 104)" && b13 == "rgb(91, 126, 91)" && b14 == "rgb(78, 129, 78)" && b15 == "rgb(65, 132, 65)" && b16 == "rgb(53, 135, 53)" && b17 == "rgb(39, 138, 39)" && b18 == "rgb(26, 141, 26)" && b19 == "rgb(13, 145, 13)" && b20 == "rgb(0, 150, 0)"){
            this.setState({
                result:true
            })
        }
    }
    tritanCheck=()=>{
        let b12 =document.getElementById("b12").style.backgroundColor
        let b13 =document.getElementById("b13").style.backgroundColor
        let b14 =document.getElementById("b14").style.backgroundColor
        let b15 =document.getElementById("b15").style.backgroundColor
        let b16 =document.getElementById("b16").style.backgroundColor
        let b17 =document.getElementById("b17").style.backgroundColor
        let b18 =document.getElementById("b18").style.backgroundColor
        let b19 =document.getElementById("b19").style.backgroundColor
        let b20 =document.getElementById("b20").style.backgroundColor
        if(b12 == "rgb(150, 0, 17)"){console.log("true")}else{ document.getElementById("b12").style.backgroundColor = "white"}
        if(b13 == "rgb(150, 0, 34)"){console.log("true")}else{ document.getElementById("b13").style.backgroundColor = "white"}
        if(b14 == "rgb(150, 0, 51)"){console.log("true")}else{ document.getElementById("b14").style.backgroundColor = "white"}
        if(b15 == "rgb(150, 0, 68)"){console.log("true")}else{ document.getElementById("b15").style.backgroundColor = "white"}
        if(b16 == "rgb(150, 0, 85)"){console.log("true")}else{ document.getElementById("b16").style.backgroundColor = "white"}
        if(b17 == "rgb(150, 0, 102)"){console.log("true")}else{ document.getElementById("b17").style.backgroundColor = "white"}
        if(b18 == "rgb(150, 0, 119)"){console.log("true")}else{ document.getElementById("b18").style.backgroundColor = "white"}
        if(b19 == "rgb(150, 0, 136)"){console.log("true")}else{ document.getElementById("b19").style.backgroundColor = "white"}
        if(b20 == "rgb(150, 0, 150)"){console.log("true")}else{ document.getElementById("b20").style.backgroundColor = "white"}
        if(b12 == "rgb(150, 0, 17)" && b13 == "rgb(150, 0, 34)" && b14 == "rgb(150, 0, 51)" && b15 == "rgb(150, 0, 68)" && b16 == "rgb(150, 0, 85)" && b17 == "rgb(150, 0, 102)" && b18 == "rgb(150, 0, 119)" && b19 == "rgb(150, 0, 136)" && b20 == "rgb(150, 0, 150)"){
            this.setState({
                result:true
            })
        }
    }

    render(){

        return (
            <div>
            <body className={classes.topAlignment}>
    
            <div className="container">
                <div className="row m-auto">
                    <div className="col-md-12">
                        <div className="well shadow bg-light p-3 mb-5 rounded" className={classes.st}><br />
                            <div className="text-center">
                                <button id="btn1"  className="btn btn-outline-info btn-lg m-2" onClick={this.redGreen}>Red-Green</button>
                                <button id="btn2" className="btn btn-outline-info btn-lg m-2" onClick={this.protan}>Protan</button>
                                <button id="btn3" className="btn btn-outline-info btn-lg m-2" onClick={this.deutan} >Deutran</button>
                                <button id="btn4" className="btn btn-outline-info btn-lg m-2" onClick={this.tritan}>Tritan</button>
                            </div> <br />
        
                            <h3 className="text-center"><b>Color arrangement game</b></h3>
                            <p className="text-center">1. Arrange the colors!</p>
                            <p className="text-center">2. To choose a color, tap it on the upper line!</p>
                            <p className="text-center">3. Then tap on the position of the bottom line to put them there!</p>
                            <p className="text-center">4. Once color scale is completed, push the 'READY' button!</p>
                            <p className="text-center">5. You can change the order by putting back the color to a white position!</p><br />
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container">
        
        
            </div>
        
            <div className="container">
                <div className="row m-auto">
                    <div className="col-md-12">
                        <div className="well nd shadow rounded" classesname={classes.bb1}><br />
                            <div className="row " className={classes.in}>
                                <div id="b1" class="example" className=" b1 rounded d-inline" className={classes.block1} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg1}}>
                                </div>
                                <div id="b2" className=" rounded d-inline" className={classes.block2} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg2}}>
                                </div>
                                <div id="b3" className=" b3 rounded d-inline" className={classes.block3} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg3}}>
                                </div>
                                <div  id="b4" className=" b4 rounded d-inline" className={classes.block4} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg4}}>
                                </div>
                                <div  id="b5" className="  rounded d-inline" className={classes.block5} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg5}}>
                                </div>
                                <div  id="b6" className="  rounded d-inline" className={classes.block6} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg6}}>
                                </div>
                                <div  id="b7" className="  rounded d-inline" className={classes.block7} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg7}}>
                                </div>
                                <div  id="b8" className="  rounded d-inline" className={classes.block8} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg8}}>
                                </div>
                                <div  id="b9" className="  rounded d-inline" className={classes.block9} onClick={this.onChangeColor} style={{backgroundColor:this.state.bg9}}>
                                </div>
                            </div>
                            <br />
                            <div className="row " className={classes.in}>
                                <div id="b11" className=" rounded d-inline" className={classes.block11}  style={{backgroundColor:this.state.bg11}}>
                                </div>
                                <div id="b12"  className=" rounded d-inline" className={classes.block12} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg12}}>
                                </div>
                                <div id="b13" className=" rounded d-inline" className={classes.block13} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg13}}>
                                </div>
                                <div id="b14" className=" rounded d-inline p-3" className={classes.block14} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg14}}> 
                                </div>
                                <div id="b15" className=" rounded d-inline p-3" className={classes.block15} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg15}}>
                                </div>
                                <div id="b16" className="  rounded d-inline p-3" className={classes.block16} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg16}}>
                                </div>
                                <div id="b17" className=" rounded d-inline p-3" className={classes.block17} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg17}}>
                                </div>
                                <div id="b18" className=" rounded d-inline p-3" className={classes.block18} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg18}}>
                                </div>
                                <div id="b19"  className=" rounded d-inline p-2" className={classes.block19} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg19}}>
                                </div>
                                <div id="b20" className=" rounded d-inline p-2" className={classes.block20} onClick={this.onPasteColor} style={{backgroundColor:this.state.bg20}}>
                                </div>
                            </div>
                            <br />
        
                            <div className="text-center">
                                {
                                    this.state.redGreenButton ? <button className="btn btn-outline-info btn-lg" id="reset" onClick={this.redGreenCheck}>Ready</button> :null
                                }
                                {
                                    this.state.protanButton ? <button className="btn btn-outline-info btn-lg" id="reset" onClick={this.protanCheck}>Ready</button> :null
                                }
                                {
                                    this.state.deutanButton ? <button className="btn btn-outline-info btn-lg" id="reset" onClick={this.deutanCheck}>Ready</button> :null
                                }
                                {
                                    this.state.tritanButton ? <button className="btn btn-outline-info btn-lg" id="reset" onClick={this.tritanCheck}>Ready</button> :null
                                }
                                {
                                    this.state.result? <h3>Sucess rate: 100%</h3>: null
                                }
                                {
                                    this.state.result? <h3>Congratulation! You completed the game!</h3>: null
                                }
                                {
                                    this.state.result? <p>Click the button above to select another color scale!</p>: null
                                }
                                    {/* <h3>Congratulation! You completed the game!</h3><br/>
                                    <p>Click the button above to select another color scale!</p><br/> */}

                            </div><br />
                        </div>
                    </div>
                </div>
            </div>
 
            {/* <p id="test1">This is a paragraph.</p> */}
            <p id="test2">This is another paragraph.</p>
        
            <p>Input field: <input type="text" id="test3" value="Mickey Mouse" /></p>
        
        
        
        
 
        
        
        
        </body>
            </div>
        )
    }
    
}

export default colorArrangementExercise
