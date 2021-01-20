import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from './layoutSection/banner2';
import { Link } from 'react-router-dom';
import MapContainer from './layoutSection/googleMap';


class Contact extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:"",
            address:"",
            subject:"",
            message: "",
            Reviews:[]
        }
    }

    // componentDidMount(){
    //     axios.get('http://localhost:5000/contact')
    //         .then(res=>{
    //             if(res.data.length>0){
    //                 this.setState({
    //                     Reviews:res.data.map(review=>{review.name}),
    //                     name: res.data[0].name
    //                 })
    //             }
    //         })}

    onChangeName(e){
        this.setState({
            name : e.target.value
        })
    }
    onChangeAddress(e){
        this.setState({
            address : e.target.value
        })
    }
    onChangeSubject(e){
        this.setState({
            subject : e.target.value
        })
    }
    onChangeMessage(e){
        this.setState({
            message : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const Reviews = {
            name : this.state.name,
            address : this.state.address,
            subject : this.state.subject,
            message : this.state.message
        }
        console.log(Reviews);
        axios.post('http://localhost:5000/contact/add', Reviews)
            .then(res=> console.log(res.data));
            
        window.location= '/contact';
    }
    render(){
        return(
            <div style={{marginTop:"123px"}}>
                <Carousel />
                    <section class="contact_area p_120">
                            <div id="mapBox" class="mapBox" >
                                <MapContainer style={{overflow:"hidden", position: "relative"}}/>
                            </div>
                        <div class="container" style={{marginTop:"275px"}}>
        
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="contact_info">
                                        <div class="info_item">
                                            <i class="lnr lnr-home"></i>
                                            <h6>Lahore, Pakistan</h6>
                                            <p>Allama Iqbal Town </p>
                                        </div>
                                        <div class="info_item">
                                            <i class="lnr lnr-phone-handset"></i>
                                            <h6>
                                                <Link to="#">+92336-4236183</Link>
                                            </h6>
                                            <p>Mon to Fri 9am to 6 pm</p>
                                        </div>
                                        <div class="info_item">
                                            <i class="lnr lnr-envelope"></i>
                                            <h6>
                                                <Link to="#">support@gmail.com</Link>
                                            </h6>
                                            <p>Send us your query anytime!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                <form class="row contact_form" onSubmit={this.onSubmit}>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name"
                                                value={this.state.name} onChange={this.onChangeName} />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address"
                                                value={this.state.address} onChange={this.onChangeAddress} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Enter Subject"
                                                value={this.state.subject} onChange={this.onChangeSubject} />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" id="message" rows="1" placeholder="Enter Message"
                                                value={this.state.message} onChange={this.onChangeMessage}></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-right">
                                        <button class="main_btn2 text-uppercase">Send Message</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                </section>
            </div>
            );
    }
}
export default Contact;