import React from 'react';
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquare } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react';



const Nav = () => {
     const [activeNav, setActiveNav] = useState('#');

     return (
          <nav key={1}>
               <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /></a>
               <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
               <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
               <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiMessageSquare /></a>
               <a href="#contact" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>

          </nav>
     );
};

export default Nav;