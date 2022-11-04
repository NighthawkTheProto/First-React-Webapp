import React from "react";
import "./style.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Privacy from './pages/privacy';
import Home from './pages/home';


export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/home' exact element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/privacy' element={<Privacy/>} />
      </Routes>
    </Router>
    </div>
  );
}
