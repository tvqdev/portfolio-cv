import React from 'react';
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
     return (
          <section id='experience'>
               <h5>What Skill's I Have</h5>
               <h2>My Experience</h2>

               <div className="container experience_container">
                    <div className="experience_fe">
                         <h3>Frontend Development</h3>
                         <div className="experience_content">
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4>HTML</h4>

                                   </div>
                              </article>
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4>CSS</h4>

                                   </div>
                              </article>
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4>JavaScript (ES6)</h4>

                                   </div>
                              </article>
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4>SASS</h4>

                                   </div>
                              </article>
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4> Bootstrap, Ant Design</h4>

                                   </div>
                              </article>
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4>ReactJS, Redux, Redux-Thunk</h4>

                                   </div>
                              </article>
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4>Axios, Git</h4>

                                   </div>
                              </article>
                              <article className='experience_details'>
                                   <BsFillPatchCheckFill className="experience_details-icon" />
                                   <div>
                                        <h4>Adobe Photoshop , Figma</h4>

                                   </div>
                              </article>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Experience;