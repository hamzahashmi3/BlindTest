import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function App() {
 return (
    <header className="header_area">
    <div className="top_menu row m0">
        <div className="container">
            <div className="float-left">
                <ul className="left_side">
                    <li>
                        <a href="login.html">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="login.html">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="login.html">
                            <i className="fa fa-dribbble"></i>
                        </a>
                    </li>
                    <li>
                        <a href="login.html">
                            <i className="fa fa-behance"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="float-right">
                <ul className="right_side">
                    <li>
                        <a href="login.html">
                            <i className="lnr lnr-phone-handset"></i>
                            012-6532-568-9746
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="lnr lnr-envelope"></i>
                            emergency@colorlib.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                <Link to="/" className="navbar-brand logo_h">
                                    <img src="img/logo.png" alt="" />
                                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <div className="row ml-0 w-100">
                        <div className="col-lg-12 pr-0">
                            <ul className="nav navbar-nav center_nav pull-right">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/departments.html" className="nav-link">Departments</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/doctors.html" className="nav-link">Doctors</Link>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/about.html" className="nav-link">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/services.html" className="nav-link">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/elements.html" className="nav-link">Elements</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/blog.html" className="nav-link">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/single-blog.html" className="nav-link">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                            <Link to="/contact.html" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
 );
}
 
export default App;