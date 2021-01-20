import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const footer=()=>{
return(
    <footer class="footer-area section_gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-2  col-md-6">
                    <div class="single-footer-widget">
                        <h6>Top Products</h6>
                        <ul class="footer-nav">
                            <li>
                                <Link to="#">Managed Website</Link>
                            </li>
                            <li>
                                <Link to="#">Manage Reputation</Link>
                            </li>
                            <li>
                                <Link to="#">Power Tools</Link>
                            </li>
                            <li>
                                <Link to="#">Marketing Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4  col-md-6">
                    <div class="single-footer-widget mail-chimp">
                        <h6 class="mb-20">Contact Us</h6>
                        <p className="text-light">
                            56/8, Main Buliward, alama Iqbql Town, Lahore, Punjab, PK
                        </p>
                        <h3 className="text-light">+92336-4236183</h3>
                        <h3 className="text-light">+92307-4644179</h3>
                    </div>
                </div>
                <div class="col-lg-6  col-md-12">
                    <div class="single-footer-widget newsletter">
                        <h6 >Newsletter</h6>
                        <p className="text-light">You can trust us. we only send promo offers, not a single spam.</p>
                        <div id="mc_embed_signup">
                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                            method="get" class="form-inline">

                                <div class="form-group row">
                                    <div class="col-lg-7 col-md-6 col-sm-12">
                                        <input name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
                                        required="" type="email" />
                                    </div>

                                    <div class="col-lg-5 col-md-12">
                                        <button class="nw-btn main_btn2 circle">get started
                                            <span class="lnr lnr-arrow-right"></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row footer-bottom d-flex justify-content-between">
                <p class="col-lg-8 col-sm-12 footer-text m-0 text-light" >
                    All rights reserved | This website is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <Link to="#" target="_blank">TechnoCannons</Link>.</p>
                <div class="col-lg-4 col-sm-12 footer-social">
                    <Link to="#">
                        <i class="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                        <i class="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                        <i class="fa fa-dribbble"></i>
                    </Link>
                    <Link to="#">
                        <i class="fa fa-behance"></i>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);
}
export default footer;