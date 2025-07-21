import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//components for each routes
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//components for Home pages
import Body from "./Components/Body";
import BodyPart2 from "./Components/BodyPart2";

//components for Custom pages
import Customize from "./pages/Custom/Customize";




//components for About pages



//components for New Arrivals pages





//components for For Sale pages





//components for Services pages



//function of Home page
function Home () {
  return(
    <>
     <Body/>
    <BodyPart2/>
    </>
  );
}

//function of Custom page
function Custom () {
  return(
    <Customize/>
  );
}

function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Custom" element={<Custom/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}



export default App;
