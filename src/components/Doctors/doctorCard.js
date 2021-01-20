import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


class DoctorCard extends Component {
    constructor(props){
        super(props);
    }
getId(id){
    
    console.log(id)
}
    render(){
        let pathname = "/doctorDetail/"+this.props.doctor._id
        return (
               <div className="col-lg-3 col-md-6 single-team mb-50" onClick={this.getId.bind(this,this.props.doctor._id)}>
                <Link to="/doctorDetail" >
                    <div className="thumb">
                    <img className="img-fluid" src={this.props.doctor.img} alt="" />
                    <div className="align-items-end justify-content-center d-flex">
                        <div className="social-links">
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-dribbble"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-behance"></i>
                            </a>
                        </div>
                        <p>{this.props.doctor.description}</p>
                        <h4>{this.props.doctor.name}</h4>
                    </div>
                </div>
                </Link>
            </div>
        )
    }
}

export default DoctorCard;
