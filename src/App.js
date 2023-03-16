import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Calender from './components/pages/Calender';
import Profile from './components/pages/Profile';
import AddTask from './components/AddTask';
import Budget from './components/Budget';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/calender" element={<Calender />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/addtask" element={<AddTask />} />
        <Route exact path="/budget" element={<Budget />} />
      </Routes>
      <Footer />
    </>
  )
}



export default App;
