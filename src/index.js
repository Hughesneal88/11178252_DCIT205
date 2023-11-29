import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContent from './App';
import Navbar from './Navbar';
// import About from './About';
// import PhDProgrammes from './PhdProgrammes';
// import Contact from './Contact';
// import NewsAndEvents from './NewsAndEvents';
// import StudentComplaintForm from './ComplaintForm';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>

);

