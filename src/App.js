import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import AddTask from './components/AddTask';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Budget from './components/Budget';



const App = () => {
  return (
    <>
    {/* <Aim/> */}
      <Navbar />
      <AddTask/>
      <Budget/>
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}
    </>
  )
}



export default App;
