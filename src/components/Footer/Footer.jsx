import React from 'react';
import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
     return (
          <footer>
               {/* <a href="##" className='footer_logo'>TVQ</a>
               <ul className="link">
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">About</a></li>
               </ul>
               <div className="footer_social">
                    <a href="https://github.com/"><FaFacebookF /></a>
                    <a href="https://github.com/"><FaInstagram /></a>
                    <a href="https://github.com/"><FaYoutube /></a>
               </div> */}
               <div className="footer_copy">
                    <small>&copy; TVQ Tutorials. All rights reserved</small>
               </div>
          </footer>
     );
};

export default Footer;