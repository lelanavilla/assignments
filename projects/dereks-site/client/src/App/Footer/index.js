import React from 'react';

function Footer(props){
    return(
        <footer>
        <div className="footer">
       {/* /* <div className="p-words"> 
        {/* <p><strong>ESKO PHOTOGRAPHY</strong> </p> */}
        {/* <p>Las Vegas, Nevada</p>
        <p>eskophotography@gmail.com</p>
        </div> */ }
  <div className="connect-with-us" ><p>Connect with Us on Social Media</p></div>
<div className="social-media-icons">
<a href="https://www.facebook.com/EskoPhotography/" class="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<i> <a href="https://www.instagram.com/eskobruhh/?hl=en" className="fa fa-instagram"></a></i>
<i> <a href="https://www.linkedin.com/in/derek-eskridge-07484587/" className="fa fa-linkedin"></a></i>
<i> <a href="https://www.youtube.com/channel/UC1-Ri3uQTz0dW7mEBZZGjTw"className="fa fa-youtube-square"></a></i>
</div>
</div>
        </footer>
    )
};
export default Footer;