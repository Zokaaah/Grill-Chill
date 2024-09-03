// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/Navbar.css/';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='ContentBody'>
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Inicio</p>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#about">Cardápio</a>
        <a href="#services">Faça seu pedido</a>
        <a href="#services">Contato</a>

      </div>
     
      <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
    </div> 
  );
};

export default Navbar;