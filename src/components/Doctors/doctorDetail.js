import React, { Component } from 'react';
import './doctorDetail.css';
import axios from 'axios';

class DoctorDetail extends Component {

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
        axios.get('http://localhost:5000/doctorDetail')
            .then(res=>{
                this.setState({
                    name : res.data.name,
                    img:res.data.img,
                    intro: res.data.intro,
                    Biography:res.data.Biography,
                    description: res.data.description,
                    fees: res.data.fees})
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    render(){
        console.log(this.state.img)
        // let doctorDetail = this.state.people.map(doctor=>{
            return(
                <body className="top-alignment">
                <section className="sec-one px-5">
                    <div className="row">
                        <div id="doct_img" className="col-lg-4 float-left">
                            <img className="img-responsive rounded-circle float-left" src="img/t1.jpg" alt=""/>
                        </div>
                        <div className="col-lg-8 float-right">
                            <p className="text-secondary pt-5 end">E N D O C R I N O L O G I S T</p>
                            <h2 className="d-name">Dr Amir Farooq</h2><br />
                            <div>
                                {/* <!-- Add font awesome icons --> */}
                                <a href="#" className="fa fa-facebook px-2 text-dark"></a>
                                <a href="#" className="fa fa-twitter px-2 text-dark"></a>
                                <a href="#" className="fa fa-youtube px-2 text-dark"></a>
                                <a href="#" className="fa fa-instagram px-2 text-dark"></a>
                            </div> <br />
                            <p className="des">Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or <br />
                                thoracic surgery) though minor procedures may be performed by pulmonologists. <br /> Pulmonology is closely.</p> <br />
                        </div>
                    </div>
                </section>
                <section className=" sec-two px-5 py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="aside py-5">
                            <p className="py-1"><i className="fa fa-user px-3"></i> Female </p>
                            <p className="py-1"><i className="fa fa-comments px-3"></i> English, Phillip </p>

                            <p className="py-1"><i className="fa fa-phone px-3"></i> 2673-8031-39 </p>
                            <p className="py-1"><i className="fa fa-envelope px-3"></i> Johndoe@example.com </p>
                            <p className="py-1"><i className="fa fa-address-card px-2"></i> Mediz 2nd building EBEX St. Walton Singapore</p>

                            <a href="#"><button className="btn btn-primary btn-lg w-100 py-4">Download VCard </button></a>
                        </div>


                        <div className="py-5">

                            <h2>Specialty</h2>
                            <p>Respiratory medicine (lung)</p>

                            <hr className="my-5" />

                            <h2>Conditions</h2>
                            <p>Cystic fibrosis (children)</p>

                            <hr className="my-5" />

                            <h2>Memberships</h2>
                            <div className="py-3 mem">
                                <p className="text-primary">British Cardiovascular Society</p>
                                <p className="text-primary">British Society of Cardiovascular Magneticy</p>
                                <p className="text-primary">European Society of Cardiology</p>
                                <p className="text-primary">Fellow Royal Society of Medicine</p>
                            </div>
                            <hr className="my-5" />

                            <h2>Doctor Schedule</h2>
                            <div className="py-3 mem">
                                <p className="text-primary">Monday <span className="float-right text-dark">07:00 - 16:00 <i className="fa fa-clock-o text-success"></i></span></p>
                                <hr />
                                <p className="text-primary">Tuesday <span className="float-right text-dark">04:00 - 13:00 <i className="fa fa-clock-o text-success"></i></span></p>
                                <hr />
                                <p className="text-primary">Friday <span className="float-right text-dark">08:00 - 12:00 <i className="fa fa-clock-o text-success"></i></span></p>
                                <hr />
                                <p className="text-primary">Saturday <span className="float-right text-dark">09:00 - 15:00 <i className="fa fa-clock-o text-success"></i></span></p>
                                <hr />
                            </div>



                        </div>


                    </div>
                    <div className="col-md-8">

                        <h1 className="text-primary py-4">Biography</h1>
                        <p>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in
                            1987. He then worked at various New York hospitals for the next five years, including Seattle, and
                            Washington. He also held positions with the Medical Research Council, NY Heart Foundation
                            and the Wellcome Trust.</p>

                        <hr className="text-primary bg-primary w-25 float-left" /> <br /> <br />

                        <p>He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior
                            researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with
                            the main clinical focus of oesophageal surgery. He continued in this post until his move to the
                            Seattle in the early 1992.</p>

                        <hr className="my-5" />

                        <h1 className="text-primary py-4">Education</h1>
                        <p>BSc degree in Neurosciences (1994) at University College London.</p>

                        <hr className="text-primary bg-primary w-25 float-left" /> <br /> <br />

                        <p>Royal College of Physicians; MRCP (UK) 2000.</p>

                        <hr className="text-primary bg-primary w-25 float-left" /> <br /> <br />

                        <p>PHD Imperial College London School of Medicine in 2004.</p>


                        <hr className="my-5" />

                        <h1 className="text-primary py-4">Research interests</h1>
                        <p>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation</p>


                        <hr className="my-5" />


                        <h1 className="text-primary py-4">Awards and honours</h1>
                        <p>1988 British Thoracic Society Fisons Travel Fellowship</p>

                        <hr className="text-primary bg-primary w-25 float-left" /> <br /> <br />

                        <p>1991 British Medical Association HC Roscoe Fellowship</p>

                        <hr className="text-primary bg-primary w-25 float-left" /> <br /> <br />

                        <p>1997 Royal College of Physicians Graham Bull Prize in Clinical Science.</p>

                        <hr className="text-primary bg-primary w-25 float-left" /> <br /> <br />

                        <p>2004 North American CF Conference Plenary Lecturer (first non-American)</p>

                        <hr className="text-primary bg-primary w-25 float-left" /> <br /> <br />

                        <p>2005 CF Trust John Panchaud Medal</p>

                        <hr className="my-5" />


                        <h1 className="text-primary py-4">My Skills</h1>

                        <div className="my-5">
                            <h6 className="my-3">CARDIOLOGY</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                                </div>
                            </div>
                        </div>
                        <div className="my-5">
                            <h6 className="my-3">HEART ASSESSMENT</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                </div>
                            </div>
                        </div>

                        <div className="my-5">
                            <h6 className="my-3">HEART SURGERY</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                </div>
                            </div>
                        </div>

                        <div className="my-5">
                            <h6 className="my-3">REHABILITATION AND THERAPIES</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </body>
        )
        // })
        // return (
        //     {doctorDetail}
        // )
    }
}

export default DoctorDetail;
