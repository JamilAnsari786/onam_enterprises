// import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about'
import Contact from './pages/contact'
import Service from './pages/service'
import Home from './pages/home'
import Industries from './pages/industries'
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/industries" element={<Industries />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
