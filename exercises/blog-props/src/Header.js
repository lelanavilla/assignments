import React from 'react';
import Nav from './Nav';

function Header(){

    return(
        <div className="overlay">
     <header className="header">
         <Nav/>
            <h1 className="main">Clean Blog</h1>
                <h2 className="sub">A Blog Theme by Start BootStrap</h2>
        </header>
        </div>
    )
};
export default Header;