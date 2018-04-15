import React from "react";
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <header>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/secondPage">Second Page</Link>
                <Link to="/thirdPage">Third Page</Link>
            </nav>
        </header>
    )
}

export default Header;