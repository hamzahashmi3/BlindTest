import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from './timeout-notice.png'
import "./design.css";
import { Link } from 'react-router-dom';
import Progress from 'react-progressbar';

class StartTest extends Component{

    constructor(props){
        super(props);
        this.state={
            valueOf1:null,
            valueOf2:null,
            valueOf3:null,
            valueOf4:null,
            valueOf5:null,
            valueOf6:null,
            valueOf7:null,
            valueOf8:null,
            valueOf9:null,
            restartCount:1
        }
    }
    one=()=>{
        this.setState({
            valueOf1: "1"});
    }
    two=()=>{
        this.setState({
            valueOf2: "2"});
    }
    three=()=>{
        this.setState({
            valueOf3: "3"});
    }
    four=()=>{
        this.setState({
            valueOf4: "4"});
    }
    five=()=>{
        this.setState({
            valueOf5: "5"});
    }
    six=()=>{
        this.setState({
            valueOf6: "6"});
    }
    seven=()=>{
        this.setState({
            valueOf7: "7"});
    }
    eight=()=>{
        this.setState({
            valueOf8: "8"});
    }
    nine=()=>{
        this.setState({
            valueOf9: "9"});
    }
    restart=()=>{
        this.setState({
            restartCount: this.state.restartCount++});
    }
    render(){


        return(
            <div className="body">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <div className="one d-flex p-2" style={{padding:"1px"}}>
                            <Link to="/blindtest" className="mr-2 link1">
                                <i className="fa fa-times text-white" style={{marginLeft:"5px"}}></i>
                                <span className="text-white"> Exit </span>
                            </Link>
                        </div>
                        <div>
                            <p className=" text-white"><b>Trial # {this.state.restartCount}</b></p>
                        </div>
                        <button className="one d-flex p-2" onClick={this.restart}>
                            <Link to="/startTset" className="mr-2 link1">
                                <i className="fa fa-undo text-white" style={{marginLeft:"5px"}}></i>
                                <span className="text-white"> Restart </span>
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="container-fluid p-5 bar">
                        <div class="progress">
                            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
                                40% Complete (success)
                            </div>
                        </div>
                    </div>

                <div className="container d-flex justify-content-center">
                    <div className="img">
                        <img src={img} width="500px" alt="" />
                    </div>
                    <div className="wrapper mt-5 ml-5">
                    <section className="num">
                        <section className="button1">
                            <div className="button btn" onClick={this.one}>1</div>
                            <div className="button btn" onClick={this.two}>2</div>
                            <div className="button btn" onClick={this.three}>3</div>
                            <div className="button btn" onClick={this.four}>4</div>
                            <div className="button btn" onClick={this.five}>5</div>
                            <div className="button btn" onClick={this.six}>6</div>
                            <div className="button btn" onClick={this.seven}>7</div>
                            <div className="button  btn" onClick={this.eight}>8</div>
                            <div className="button  btn" onClick={this.nine}>9</div>
                        </section>
                        <section className="mt-5">
                            <a className="link" href="https://www.google.com/" style={{textDecoration: "none"}}>
                                <span style={{borderRadius: "20px", backgroundColor: "#2e2d2d"}}> 
                                    <span className="fa fa-question text-white"></span>
                                    <span className="text-white p-4">Unsure</span>
                                </span>
                            </a>
                        </section>
                    <section className="mt-5">
                        <a className="link" href="https://www.google.com/" style={{textDecoration: "none"}}>
                            <span style={{borderRadius: "20px", backgroundColor: "#2e2d2d"}}> 
                                <span className="fa fa-ellipsis-h text-white"></span>
                                <span className="text-white p-4">Unsure</span>
                            </span>
                        </a>
                    </section>
                    </section>
                </div>
                
                    
                </div>
    
            </div>
        );
    }

}
export default StartTest;