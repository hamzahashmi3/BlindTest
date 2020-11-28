import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './layoutSection/banner';
import AboutMySelf from './layoutSection/aboutMySelf';
import Feedback from './layoutSection/feedback';
import BookAppointment from './layoutSection/bookAppointment';

const about=()=>{
    return(
        <div>
        <Banner />
        <BookAppointment />
        {/* <!--================ About Myself Area =================--> */}
        <AboutMySelf />
        {/* <!--================ End About Myself Area =================--> */}

        {/* <!--================ Start Feedback Area =================--> */}
        <Feedback />
        {/* <!--================ End Feedback Area =================--> */}
        </div>
    );
}
export default about;