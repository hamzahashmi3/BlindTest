import React from 'react';
import {Link} from 'react-router-dom';

const ColorBlindExercises=()=>{
    return(
        <div>
        {/* <!--================ Start recent-blog Area =================--> */}
        <section class="recent-blog-area section_gap">
            <div class="container">
                <div class="row justify-content-center section-title-wrap">
                    <div class="col-lg-12">
                        <h1>Color Blindness Exercises</h1>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> */}
                    </div>
                </div>
                <div class="row">
                    <div class="single-recent-blog col-lg-4 col-md-4">
                        <div class="thumb">
                        <Link to="/colornamingexercise" >
                            <img class="f-img img-fluid mx-auto" src="img/b1.jpg" alt="" />
                        </Link>
                        </div>
                        <Link to="/colornamingexercise" ><h4>Color Naming Exercise</h4></Link>
                        <p>
                        The test is to find the gap in a ‘C shape’. The test is able to determine the type and severity of the protan and deutan type of color blindness. 
                        </p>
                        <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                            {/* <div class="meta">
                                <span class="lnr lnr-calendar-full"></span> 13th Dec
                                <span class="lnr lnr-heart"></span> 15
                                <span class="lnr lnr-bubble"></span> 04
                            </div> */}
                        </div>
                    </div>
                    <div class="single-recent-blog col-lg-4 col-md-4">
                        <div class="thumb">
                        <Link to="/colorarrangementexercise" >
                            <img class="f-img img-fluid mx-auto" src="img/b2.jpg" alt="" />
                        </Link>
                        </div>
                        <Link to="/colorarrangementexercise" ><h4>Color Arrangement Exercise</h4></Link>
                        <p>
                        The goal of this test is to arrange the color scales in proper spectrum order. It should take less than one minute to complete this test. 
                        </p>
                        <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                            {/* <div class="meta">
                                <span class="lnr lnr-calendar-full"></span> 13th Dec
                                <span class="lnr lnr-heart"></span> 15
                                <span class="lnr lnr-bubble"></span> 04
                            </div> */}
                        </div>
                    </div>
                    <div class="single-recent-blog col-lg-4 col-md-4">
                        <div class="thumb">
                        <Link to="/colormatchingexercise" >
                            <img class="f-img img-fluid mx-auto" src="img/b3.jpg" alt="" />
                        </Link>
                        </div>
                        <Link to="/colormatchingexercise" ><h4>Color matching test</h4></Link>
                        <p>
                        The test is to match seven basic colors. The difficulty level is increasing. Complete one difficulty level takes about 1-2 minutes, the full game about 5 minutes   
                        </p>
                        <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                            {/* <div class="meta">
                                <span class="lnr lnr-calendar-full"></span> 13th Dec
                                <span class="lnr lnr-heart"></span> 15
                                <span class="lnr lnr-bubble"></span> 04
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ end recent-blog Area =================--> */}

        </div>
    );
}
export default ColorBlindExercises;