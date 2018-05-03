import React from 'react';
import {Link} from 'react-router-dom';
function Header(props){
    return(
      <header>
    
      <nav className=".nav">
      <h2> ESKO PHOTOGRAPHY</h2>
        <div className="nav-bar">
     <div className="connect-with-us" ><p>Connect with Us on Social Media</p></div>
<div className="social-media-icons">
<a href="https://www.facebook.com/EskoPhotography/" class="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<i> <a href="https://www.instagram.com/eskobruhh/?hl=en" className="fa fa-instagram"></a></i>
<i> <a href="https://www.linkedin.com/in/derek-eskridge-07484587/" className="fa fa-linkedin"></a></i>
<i> <a href="https://www.youtube.com/channel/UC1-Ri3uQTz0dW7mEBZZGjTw"className="fa fa-youtube-square"></a></i>
</div>
<div className="links">
           
            <Link to="/coverArt"id="cover-art">Cover Art</Link>
            <Link to="/portfolio"id="portfolio">Portfolio</Link>
            <Link to="/contact"id="contact">About/Contact</Link>
            <Link to="/booking"id="booking">Schedule A Booking</Link>

            {/* <Link to="/apiPage"id="api-page">Api Page</Link> */}

            </div>
            </div>
            </nav>
          </header> 
        
        
    )
};
export default Header;