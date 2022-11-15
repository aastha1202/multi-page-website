import React from "react";
import { Link } from "react-router-dom";

function NavLinks()
{
    return(
        <div className="navbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        <div className="line"></div>
        <nav className="home-nav">
        <ul>
           <Link  to="/" className="links"><span>00</span>Home</Link>
            <Link  to="/destination" className="links"><span>01</span>Destination</Link>
            <Link to="/crew" className="links"><span>02</span>Crew</Link>
            <Link to="/technology" className="links"><span>03</span>Technology</Link>
        </ul>
        </nav>
        </div>
        
    )
}

export default NavLinks;