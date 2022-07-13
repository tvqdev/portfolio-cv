import React from 'react';
import { Link } from 'react-scroll'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquare } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react';



const Nav = () => {
     const [activeNav, setActiveNav] = useState('#');

     return (
          <nav key={1}>
               <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={() => setActiveNav('/')}> <AiOutlineHome /></Link>
               <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={() => setActiveNav('#about')} ><AiOutlineUser /></Link>
               <Link to="experience" spy={true} smooth={true} offset={50} duration={500} onClick={() => setActiveNav('#experience')} ><BiBook /></Link>
               <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={() => setActiveNav('#portfolio')} ><BiMessageSquare /></Link>
               <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={() => setActiveNav('#contact')} ><RiServiceLine /></Link>

          </nav>
     );
};

export default Nav;