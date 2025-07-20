import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import BodyPart2 from './Components/BodyPart2';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
      <BodyPart2/>
      <Footer/>
    </div>
  )
}

export default App



