import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        links: [
          {
            id: 1,
            name: "Contact Us",
            to: "/contact",
            className: "nav-item"
          },
          {
            id: 2,
            name:"About Us",
            to: "/about",
            className: "nav-item"
          },
          {
            id: 3,
            name: "Doctors",
            to: "/doctors",
            className: "nav-item"
          },
          {
            id: 4,
            name: "Exercises",
            to: "/ColorBlind-Exercises",
            className: "nav-item"
          },
          {
            id: 5,
            name: "Color Blind Test",
            to: "/blindtest",
            className: "nav-item"
          },
          {
            id: 6,
            name: "Home",
            to: "/",
            className: "nav-item"
          }
        ],
        activeLink: null
      };
    
      handleClick = id => {
        this.setState({ activeLink: id });
      };
    render(){
        const { links, activeLink } = this.state;
        return (
            <header className="header_area">
            <div className="top_menu row m0">
                <div className="container">
                    <div className="float-left">
                        <ul className="left_side">
                            <li>
                                <Link to="login.html">
                                    <i className="fa fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="login.html">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="login.html">
                                    <i className="fa fa-dribbble"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="login.html">
                                    <i className="fa fa-behance"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="float-right">
                        <ul className="right_side">
                            <li>
                                <Link to="login" className="lnr lnr-phone-handset">+92336-4236183</Link>
                            </li>
                            <li>
                                <Link to="#" className="lnr lnr-envelope">emergency@gmail.com</Link>
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
                                <div>
                                    {links.map(link => {
                                    return (
                                        <div key={link.id}>
                                        <ul className="nav navbar-nav center_nav pull-right alignment-nav-item">
                                            <li onClick={() => this.handleClick(link.id)}
                                            className={ link.className +
                                                (link.id === activeLink ? " active" : "")}>
                                                    <Link to={link.to} className="nav-link">{link.name}</Link>
                                            {link.id === activeLink}
                                            </li>
                                        </ul>
                                        </div>
                                    );
                                    })}
                                </div>
                                    {/* <ul className="nav navbar-nav center_nav pull-right"> 

                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link to="/blindtest" className="nav-link">Blind-Test</Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link to="/ColorBlind-Exercises" className="nav-link">ColorBlind-Exercises</Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link to="/doctors" className="nav-link">Doctors</Link>
                                        </li>
                                        <li className="nav-item">
                                                    <Link to="/about" className="nav-link">About</Link>
                                        </li>

                                        <li className="nav-item">
                                                    <Link to="/contact" className="nav-link">Contact</Link>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
         );
    }
 
}
 
export default Header;