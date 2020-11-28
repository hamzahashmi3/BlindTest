import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const banner =()=>{
    return(
        <div>
       	{/* <!--================ Home Banner Area =================--> */}
           <section className="home_banner_area">
				<div className="banner_inner d-flex align-items-center">
					<div className="container">
						<div className="banner_content row">
							<div className="col-lg-12">
								<h1>COLOR BLIND TEST</h1>
								<p>If you have color blindness, our test can tell you 
									if your color vision deficiency is mild, moderate, 
									or strong — in less than two minutes.</p>
								<a className="main_btn mr-10">
									<Link to="startTset" style={{color:"black"}}>Start The Test</Link>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/* <!--================ End Home Banner Area =================--> */}
        </div>
    );
}
export default banner;