import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Roots from './routes/Roots';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/responsive.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Roots />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


