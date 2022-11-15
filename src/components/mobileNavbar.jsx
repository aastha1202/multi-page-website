import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileNavLinks from "./MobileNavLinks";
import {CgMenuRound} from "react-icons/cg"
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";

function MobileNavigation(){

      const [open, setOpen]= useState(false);

      const hamburgerIcon=  <CgMenuRound className="hamburger" size="40px" color="white"
      onClick={()=> setOpen(!open)}
       ></CgMenuRound>    

       const closeIcon =<CgCloseO className="hamburger" size="40px" color="white"
       onClick={()=> setOpen(!open)}
        ></CgCloseO>  

        const closeMobileMenu = () => setOpen(false)
        return(
            <div className="mobileNav">
          {open ? closeIcon : hamburgerIcon}    
          {open && <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
            </div>
        )
    
}
export default MobileNavigation;