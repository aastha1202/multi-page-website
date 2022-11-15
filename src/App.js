import React from "react";
import Destination from "./components/destination";
import Crew from "./components/crew";
import Technology from "./components/technology";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";


function App()
{
    return (
        <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew/>} />
                <Route path='/technology' element={<Technology/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
};

const Home= ()=>(
    <div className="home" style={{
    backgroundPosition:"center",
    overflow:"hidden",
    backgroundSize:"cover",
    minWidth:"100%",
    minHeight:"100vh",
   
    }}>
   <main>
    <div className="main">
    <h1>So, you want to travel to</h1>
    <span>Space</span>
    <p>  Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!</p>
  </div>
  <div class="explore-circle">
     <a href="" class="explore"> explore</a>
    </div>
    </main>
  </div>
);


export default App;