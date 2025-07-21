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
import Aboutsite from "./pages/About/Aboutsite";



//components for New Arrivals pages
import NewArrival from "./pages/Arrivals/NewArrival";





//components for For Sale pages
import ForSales from "./pages/Sales/ForSales";


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

//function of About page
function About () {
  return(
    <Aboutsite/>
  )
}


//function of New Arrival page
function Arrivals () {
  return(
    <NewArrival/>
  )
}

//function for Sales

function Sales () {
  return(
    <ForSales/>
  );
}

function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Custom" element={<Custom/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Arrivals" element={<Arrivals/>}/>
        <Route path="/Sales" element={<Sales/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}



export default App;
