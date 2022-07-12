import React from 'react';
import './About.css'
import ME from '../../assets/img/chill.png'
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
                                   <small>6+ Month Working</small>
                              </article>

                              <article className='about_card'>
                                   <FaAward className='about_icon' />
                                   <h5>Project</h5>
                                   <small>5+ Completed</small>
                              </article>
                         </div>
                         <p>Hi! My name is Tran Van Quang. I am a Web Developer. I am passionate about learning new technologies and always keep concentrated on improving myself skills. Being patient and responsible for working help me implement completely assinged tasks.</p>
                         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    </div>
               </div>
          </section>
     );
};

export default About;