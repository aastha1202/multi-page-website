import React from "react";

import { useState } from "react";

function Crew()
{
  const [toggleState, setToggleState]= useState(1);

  const toggleTab=(index)=>{
    setToggleState(index);
  }
   return (
    <div className="crew" 
    style={{
      backgroundPosition:"center",
      backgroundSize:"cover",
      minHeight:"100vh",
     
    }}>
   
    <main className="crew-main tabs_content">
    <div className="crew-text">
  <h1 className="crew-common-text"> <span>02</span> Meet your crew</h1>
    <div className="content">
        <div className={toggleState===4 ? "crew_info active_content":"crew_info"}>
        <h4 className="crew-position">Pilot</h4>
        <h1 className="crew-name">Victor Glover</h1>
        <p> Pilot on the first operational flight of the SpaceX Crew Dragon to the 
        International Space Station. Glover is a commander in the U.S. Navy where 
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
        station systems flight engineer</p>
        </div>

        <div className={toggleState===1 ? "crew_info active_content":"crew_info"}>
        <h4 className="crew-position">Flight Engineer</h4>
        <h1 className="crew-name">Anousheh Ansari</h1>
        <p> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
         fly to the ISS, and the first Iranian in space.</p>
        </div>

        <div className={toggleState===2 ? "crew_info active_content":"crew_info"}>
        <h4 className="crew-position">Commander</h4>
        <h1 className="crew-name">Douglas Hurley</h1>
        <p> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.</p>
        </div>

        <div className={toggleState===3 ? "crew_info active_content":"crew_info"}>
        <h4 className="crew-position">Mission Specialist</h4>
        <h1 className="crew-name">Mark Shuttleworth</h1>
        <p>  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
        African to travel to space as a space tourist.</p>
        </div>

        <div className="container">
          <div className={toggleState===1 ? 'dots dots_active' : "dots"}
          onClick={()=> toggleTab(1)}></div>
          <div className={toggleState===2 ? 'dots dots_active' : "dots"}
          onClick={()=> toggleTab(2)}></div>
          <div className={toggleState===3 ? 'dots dots_active' : "dots"}
          onClick={()=> toggleTab(3)}></div>
          <div className={toggleState===4 ? 'dots dots_active' : "dots"}
          onClick={()=> toggleTab(4)}></div>
        </div>
      </div> 
      </div> 

  

  <div className="crew-image">
    <img src="image-victor-glover.png" alt="img" className={toggleState===4 ? "image active_image": "image"}/>
    <img src="image-mark-shuttleworth.png" alt="img" className={toggleState===3 ? "image active_image": "image"}/>
    <img src="image-douglas-hurley.png" alt="img" className={toggleState===2 ? "image active_image": "image"}/>
    <img src="image-anousheh-ansari.png" alt="img" className={toggleState===1 ? "image active_image": "image"}/>
  </div>

  </main>
    </div>
   )
}

export default Crew;