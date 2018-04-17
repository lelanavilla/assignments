import React from 'react';
import {Link} from 'react-router-dom';
function Header(props){
    return(
      <header>
    
      <nav className=".nav">
      <h2> ESKO PHOTOGRAPHY</h2>
        <div className="nav-bar">
           
            <Link to="/coverArt"id="cover-art">Cover Art</Link>
            <Link to="/portfolio"id="portfolio">Portfolio</Link>
            <Link to="/contact"id="contact">About/Contact Us</Link>
            <Link to="/apiPage"id="api-page">Api Page</Link>

            </div>
            </nav>
          </header> 
        
        
    )
};
export default Header;