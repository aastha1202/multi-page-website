import React from "react";
import { Link } from "react-router-dom";
import MobileNavigation from "./mobileNavbar";
import NavLinks from "./navLinks";


const Navbar=()=>{
    return(
       <div className="homeNav">
        <NavLinks className="desktop_links"/>
        <MobileNavigation/>
        </div>
    );

}

export default Navbar;