import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from './layoutSection/banner2';
import BookAppointment from './layoutSection/bookAppointment';

function App() {
 return (
   <div style={{marginTop:"123px"}}>
   <Carousel />


	{/* <!--================ Start Appointment Area =================--> */}
	<BookAppointment />
	{/* <!--================ End Appointment Area =================--> */}

	{/* <!--================ Start Offered Services Area =================--> */}
	{/* <section class="service_area section_gap">
		<div class="container">
			<div class="row justify-content-center section-title-wrap">
				<div class="col-lg-12">
					<h1>Our Offered Services</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-3 col-md-6">
					<div class="single_service">
						<span class="lnr lnr-rocket"></span>
						<a href="#">
							<h4>24/7 Emergency</h4>
						</a>
						<p>
							inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
						</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="single_service">
						<span class="lnr lnr-heart-pulse"></span>
						<a href="#">
							<h4>Expert Consultation</h4>
						</a>
						<p>
							inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
						</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="single_service">
						<span class="lnr lnr-bug"></span>
						<a href="#">
							<h4>Intensive Care</h4>
						</a>
						<p>
							inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
						</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="single_service">
						<span class="lnr lnr-users"></span>
						<a href="#">
							<h4>Family Planning</h4>
						</a>
						<p>
							inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	 */}
	{/* <!--================ End Offered Services Area =================--> */}
    </div>
 );
}
 
export default App;