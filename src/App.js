import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";


import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  )
}



export default App;