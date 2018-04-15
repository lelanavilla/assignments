import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
          <div className="title"> Song Lyrics Finder</div>
          <div className="nav-bar">
                <nav>
    <div className="link1">
            <Link to="/"id="home-page">Home</Link>
       
</div>
</nav>
</div>
        </div>
    )
}

export default Header;
