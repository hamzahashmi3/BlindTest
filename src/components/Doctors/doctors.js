import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorCard from './doctorCard';
import axios from 'axios';

class doctors extends Component {
    constructor(props){
        super(props);
        this.state={
            name : "",
            img:"",
            intro: "",
            Biography:"",
            description: "",
            fees: "",
            people:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/doctors')
            .then(res=>{
                this.setState({people:res.data})
                console.log(this.state.people)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    // exerciseList(){
        
    //     return(this.state.people.map(doctor=>{
    //         return(
    //         <DoctorCard doctor={doctor}  key={doctor._id} />)
    //     }))
    // }
    render(){
        
        let doctorCard = this.state.people.map(doctor=>{
            
            return(
                <DoctorCard doctor={doctor} key={doctor._id} className="col-lg-3 col-md-6 single-team mb-50" />
            )
        })
        return (
            <section className="team-area section_gap" style={{marginTop:"123px"}}>
            <div className="container">
                <div className="row justify-content-center section-title-wrap">
                    <div className="col-lg-12">
                        <h1>Our Offered Services</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
        
                <div className="row justify-content-center d-flex align-items-center">
                    {doctorCard}
                </div>
            </div>
        </section>
         );
    }
}
 export default doctors;