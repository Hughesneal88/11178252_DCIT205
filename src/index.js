import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContent from './App';
import Navbar from './Navbar';
import About from './About';
import PhDProgrammes from './PhdProgrammes';
import Contact from './Contact';
import NewsAndEvents from './NewsAndEvents';
import StudentComplaintForm from './ComplaintForm';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Complaints" element={<StudentComplaintForm />}/>
      <Route path="/PhdProgrammes" element={<PhDProgrammes />}/>
      <Route path="/NewsAndEvents" element={<NewsAndEvents />}/>
    </Routes>
    <Footer />
  </Router>

);

