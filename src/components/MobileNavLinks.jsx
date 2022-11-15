import React from "react";
import { Link } from "react-router-dom";
// import {motion} from "framer-motion"

function MobileNavLinks(props){
  return(
    <div className="mobilenavbar">
<div className="line"></div>
<nav className="home-nav">
<ul>
   <Link  to="/" className="links" onClick={()=> props.isMobile && props.closeMobileMenu()}><span>00</span>Home</Link>
    <Link  to="/destination" className="links" onClick={()=> props.isMobile && props.closeMobileMenu()} ><span>01</span>Destination</Link>
    <Link to="/crew" className="links"  onClick={()=> props.isMobile && props.closeMobileMenu()}><span>02</span>Crew</Link>
    <Link to="/technology" className="links"  onClick={()=> props.isMobile && props.closeMobileMenu()}><span>03</span>Technology</Link>
</ul>
</nav>
</div>
  )
}

export default MobileNavLinks;