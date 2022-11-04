import React from "react";
import "./style.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Events from './pages/events';
import Home from './pages/home';
function openNav(){
  console.log("open Nav")
}

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/home' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/privacy' component={Events} />
      </Routes>
    </Router>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
