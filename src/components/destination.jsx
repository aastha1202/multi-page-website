import React from "react";
import { useState } from "react";

function Destination()
{

    const [toggleState,setToggleState]= useState(1);

    const toggleTab= (index)=>
    {
        setToggleState(index)
    }


    return(
   <div className="destination" 
    style={{
     backgroundPosition:"center",
     backgroundSize:"cover",
     minHeight:"100vh",
     maxWidth:"100%",
        
    }}>
     <main className="destination-main tabs__content">
     <h1 className="common-text"> <span>01</span> Pick your destination</h1>

     <div className="tabs_container destination_img">
        <div className="image_container">
            <div className={toggleState===1? " tabs_images" : "tabs_images hidden"}>
                <img src="image-moon.png" alt="Moon"></img>
            </div>
            <div className={toggleState===2 ? "tabs_images" : "tabs_images hidden"}>
                <img src="image-europa.png" alt="Europa"></img>
            </div>
            <div className={toggleState===3 ? "tabs_images" : "tabs_images hidden"}>
                <img src="image-mars.png" alt="Mars"></img>
            </div>
            <div className={toggleState===4 ? "tabs_images" : "tabs_images hidden"}>
                <img src="image-titan.png" alt="Titan"></img>
            </div>
        </div>
        </div>

     <div className="destination_text">
        <div className="tabs_bloc">
            <div className={toggleState===1 ? 'tabs active_tabs' :"tabs"}
             onClick={()=> toggleTab(1)}>Moon
             </div>
             <div className={toggleState===2? 'tabs active_tabs' :"tabs"}
             onClick={()=> toggleTab(2)}>Europa
             </div>
             <div className={toggleState===3? 'tabs active_tabs' :"tabs"}
             onClick={()=> toggleTab(3)}>Mars
             </div>
             <div className={toggleState===4? 'tabs active_tabs' :"tabs"}
             onClick={()=> toggleTab(4)}>Titan
             </div>
        </div>

        <div className={toggleState ===1 ? "content_tabs active_content": "content_tabs"}>
        <h1 className="planet-names">Moon</h1> 
        <p className="planet-description">   See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.
      </p>
      <div className="destination_stats">
        <div className="destination_texts">
          <h3>Avg. distance</h3>
          <p> 384,400 km</p>
        </div>
        <div className="destination_texts">
          <h3> Est. travel time</h3>
          <p> 3 days</p>
        </div>
        </div>
        </div>

        <div className={toggleState ===2? "content_tabs active_content": "content_tabs"}>
        <h1 className="planet-names">Europa</h1> 
        <p className="planet-description">The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <div className="destination_stats">
          <div className="destination_texts">
            <h3>Avg. distance</h3>
            <p> 628 mil. km</p>
          </div>
          <div className="destination_texts">
            <h3> Est. travel time</h3>
            <p> 3 years</p>
          </div>
        </div>
        </div>
        
        <div className={toggleState ===3? "content_tabs active_content": "content_tabs"}>
        <h1 className="planet-names">Mars</h1>
      <p className="planet-description"> Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
        the tallest planetary mountain in our solar system. It’s two and a half times
        the size of Everest!
      </p>
      <div className="destination_stats">
        <div className="destination_texts">
          <h3>Avg. distance</h3>
          <p> 225 mil. km</p>
        </div>
        <div className="destination_texts">
          <h3> Est. travel time</h3>
          <p> 9 months</p>
        </div>
      </div>
        </div>

        <div className={toggleState ===4? "content_tabs active_content": "content_tabs"}>
        <h1 className="planet-names">Titan</h1>
          <p className="planet-description">The only moon known to have a dense atmosphere other than Earth, Titan 
            is a home away from home (just a few hundred degrees colder!). As a 
            bonus, you get striking views of the Rings of Saturn.
          </p>
          <div className="destination_stats">
            <div className="destination_texts">
              <h3>Avg. distance</h3>
              <p>   1.6 bil. km</p>
            </div>
            <div className="destination_texts">
              <h3> Est. travel time</h3>
              <p> 7 years</p>
            </div>
          </div>
        </div>
     </div>
    
    
    
   

     </main>
   </div>
    )
}

export default Destination;