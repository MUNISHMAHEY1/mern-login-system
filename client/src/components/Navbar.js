import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href={"/"} className="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar