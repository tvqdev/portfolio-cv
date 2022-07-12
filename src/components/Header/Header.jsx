import React from 'react';
import CTA from './CTA';
import './Header.css'
import TQ from '../../assets/img/text.svg'
import Typical from 'react-typical'

// import ME from '../../assets/img/chill.png'
// import HeaderSocial from './HeaderSocial';

const Header = () => {
     return (
          <header>
               <div className="container header__container">
                    {/* <h5>Hello I'm</h5>
                    <h1>TRẦN VĂN QUANG</h1>
                    <h5 className="text-light">Frontend Developer</h5> */}

                    <Typical
                         steps={["Hello I'm", 2000, 'TRẦN VĂN QUANG<!', 2000, 'Frontend Developer', 2000]}
                         loop={Infinity}
                         wrapper="h2"
                    />
                    <CTA />
                    {/* <HeaderSocial /> */}
                    {/* <div className="me">
                         <img src={ME} alt="me" />
                    </div> */}
                    {/* <a href="#contact" className='scroll_down'>Scroll Down</a> */}
               </div>
          </header>
     );
};

export default Header;