import React from 'react';
import './About.css'
import ME from '../../assets/img/me-about.jpg'
import { FaAward } from 'react-icons/fa'
const About = () => {
     return (
          <section id='about'>
               <h5>Get To Know</h5>
               <h2>About me</h2>
               <div className="container about_container">
                    <div className="about_me">
                         <div className="about_me-img">
                              <img src={ME} alt="me" />
                         </div>
                    </div>
                    <div className="about_content">
                         <div className="about_cards">
                              <article className='about_card'>
                                   <FaAward className='about_icon' />
                                   <h5>Experience</h5>
                                   <small>3+ Years Working</small>
                              </article>

                              <article className='about_card'>
                                   <FaAward className='about_icon' />
                                   <h5>Clients</h5>
                                   <small>200 Wordwide</small>
                              </article>

                              <article className='about_card'>
                                   <FaAward className='about_icon' />
                                   <h5>Project</h5>
                                   <small>10+ Completed</small>
                              </article>
                         </div>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe neque odio nisi sed quia magnam nihil nobis vel reprehenderit, necessitatibus possimus veritatis exercitationem consequatur earum dolor fuga aut blanditiis.</p>
                         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    </div>
               </div>
          </section>
     );
};

export default About;