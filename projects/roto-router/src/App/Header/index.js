import React from 'react';
import {Link} from 'react-router-dom';
function Header(props){
    return(
        <div className="header">
      <h1> REACT ROTO ROUTER</h1>
        <nav className=".nav">
            <Link to="/" id="home">Home </Link>
            <Link to="/about"id="about">About </Link>
            <Link to="/services"id="services">Services</Link>

            </nav>
        </div>
    )
};
export default Header;