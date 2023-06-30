import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/';
import Housing from './pages/Housing/';
import About from './pages/About/';
import Error from './pages/Error/';
import Header from './components/Header/';
import Footer from './components/Footer/';
import './css/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element ={<Housing />} />
        <Route path="/about" element ={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);