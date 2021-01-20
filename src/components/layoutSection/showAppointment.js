import React, { Component } from 'react';
import axios from 'axios';

export const Appointment = props=>{
    return(
        <tr>
            <td>{props.appointment.name}</td>
            <td>{props.appointment.phone}</td>
            <td>{props.appointment.emailAddress}</td>
            <td>{props.appointment.dateOfBirth.substring(0,10)}</td>
            <td>{props.appointment.appointmentDate.substring(0,10)}</td>
            <td>{props.appointment.message}</td>
            <td>
                <a href="#" onClick={props.deleteAppointment(props.appointment._id)}>Delete</a>
            </td>
        </tr>
    )
}

class ShowAppointment extends Component {
    constructor(props){
        super(props);

        this.deleteAppointment = this.deleteAppointment.bind(this);
        // this.exerciseList = this.exerciseList.bind(this);

        this.state={appointments:[]}
    }
    componentDidMount(){
        axios.get('http://localhost:5000/appointments/')
            .then(res=>{
                this.setState({appointments:res.data})
                console.log(this.state.appointments)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    deleteAppointment(id){
        axios.delete('http://localhost:5000/appointments/'+id)
            .then(res=>{console.log(res.data)})
                this.setState({
                    appointments: this.state.appointments.filter(el=> el._id!==id )
                })
    }

    exerciseList(){
        
        return(this.state.appointments.map(currentAppointment=>{
            return(
            <Appointment appointment={currentAppointment} deleteAppointment={this.deleteAppointment} key={currentAppointment._id} />)
        }))
    }
    render(){
        return (
            <div>
                <h3>Booked Appointments</h3>
                <table className="table">
                    <thead className="thead-lihgt">
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email Address</th>
                            <th>Date Of Birth</th>
                            <th>Appointment Date</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default ShowAppointment;
