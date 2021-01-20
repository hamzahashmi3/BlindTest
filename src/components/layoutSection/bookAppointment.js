import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Bookappointment extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeAppointmentDate = this.onChangeAppointmentDate.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:"",
            phone:"",
            emailAddress:"",
            dateOfBirth: new Date(),
            appointmentDate: new Date(),
            message:"",
            bookings:[]
        }
    }

    onChangeName(e){
        this.setState({
            name : e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone : e.target.value
        })
    }
    onChangeEmailAddress(e){
        this.setState({
            emailAddress : e.target.value
        })
    }
    onChangeDateOfBirth(date){
        this.setState({
            dateOfBirth : date
        })
    }
    onChangeAppointmentDate(date){
        this.setState({
            appointmentDate : date
        })
    }
    onChangeMessage(e){
        this.setState({
            message : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const appointment = {
            name : this.state.name,
            phone : this.state.phone,
            emailAddress : this.state.emailAddress,
            dateOfBirth : this.state.dateOfBirth,
            appointmentDate : this.state.appointmentDate,
            message : this.state.message
        }
        console.log(appointment);
        axios.post('http://localhost:5000/appointments/add', appointment)
            .then(res=> console.log(res.data));
            
        window.location= '/';
    }
    render(){
        return(
            <div>
                <section class="appointment-area">
                    <div class="container">
                        <div class="row justify-content-between align-items-center appointment-wrap">
                            <div class="col-lg-5 col-md-6 appointment-left">
                                <h1>
                                    Servicing Hours
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ul class="time-list">
                                    <li class="d-flex justify-content-between">
                                        <span>Monday-Friday</span>
                                        <span>08.00 am - 10.00 pm</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span>Saturday</span>
                                        <span>08.00 am - 10.00 pm</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span>Sunday</span>
                                        <span>08.00 am - 10.00 pm</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 pt-60 pb-60">
                                <div class="appointment-right">
                                    <form class="form-wrap" onSubmit={this.onSubmit}>
                                        <h3 class="pb-20 text-center mb-20">Book an Appointment</h3>
                                        <input type="text" class="form-control" name="name" placeholder="Patient Name"
                                            value={this.state.name} onChange={this.onChangeName} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Patient Name'" />
                                        <input type="text" class="form-control" name="phone" placeholder="Phone " 
                                            value={this.state.phone} onChange={this.onChangePhone} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone'" />
                                        <input type="email" class="form-control" name="email" placeholder="Email Address" 
                                            value={this.state.emailAddress} onChange={this.onChangeEmailAddress} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
                                        {/* <input id="datepicker1" name="dop" class="dates form-control" placeholder="Date of Birth = yyyy-mm-dd" type="text" > */}
                                            <label>Date of Birth = </label>
                                            <DatePicker selected={this.state.dateOfBirth} onChange={this.onChangeDateOfBirth}/>
                                            <br />
                                        {/* </input> */}
                                        {/* <input id="datepicker2" class="dates form-control" placeholder="appointment Date = yyyy-mm-dd" type="text" > */}
                                            <label>Appointment Date = </label>
                                            <DatePicker selected={this.state.appointmentDate} onChange={this.onChangeAppointmentDate}/>
                                            <br />
                                        {/* </input> */}
                                        <textarea name="messege" class="" rows="5" placeholder="Messege" 
                                            value={this.state.message} onChange={this.onChangeMessage} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"></textarea>
                                        <div class="text-center confirm_btn_box">
                                            <button class="main_btn2 text-uppercase">Confirm Booking</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );

    }
}
export default Bookappointment;