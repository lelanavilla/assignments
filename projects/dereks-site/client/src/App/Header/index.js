import React from 'react';
import {Link} from 'react-router-dom';
function Header(props){
    return(
      <header>
    
      <nav className=".nav">
      <h2> ESKO PHOTOGRAPHY</h2>
        <div className="nav-bar">
           
            <Link to="/coverArt"id="cover-art">Cover Art</Link>
            <Link to="/images"id="portfolio">Portfolio</Link>
            <Link to="/contact"id="contact">About/Contact</Link>
            <Link to="/bookings"id="api-page">Booking</Link>

            </div>
            </nav>
          </header> 
        
        
    )
};
export default Header;