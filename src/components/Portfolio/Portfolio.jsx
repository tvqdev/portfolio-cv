import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
// import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'


const data = [
     {
          id: 1,
          image: IMG1,
          title: 'Landing page sarmas.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'https://tvqdev.github.io/sarmas/'
     },
     {
          id: 1,
          image: IMG1,
          title: 'Landing page Dinner.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'https://tvqdev.github.io/Dinner/'
     },
     {
          id: 2,
          image: IMG2,
          title: 'Landing page Foodieland.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'https://tvqdev.github.io/Foodieland/'
     },
     {
          id: 4,
          image: IMG3,
          title: 'RealEstateLandingPage.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'https://tvqdev.github.io/RealEstateLandingPage/'
     },
     {
          id: 5,
          image: IMG5,
          title: 'Movie Reactjs.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'https://webmovieg4.vercel.app/'
     },
     {
          id: 6,
          image: IMG6,
          title: 'Portfolio CV.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'portfolio-cv-three.vercel.app'
     },
]

const Portfolio = () => {
     return (
          <section id='portfolio'>
               <h5>My Recent Work</h5>
               <h2>Portfolio</h2>
               <div className="container portfolio_container">
                    {data.map(({ id, image, title, github, demo }) => {
                         return <article key={id} className='portfolio_item'>
                              <div className="portfolio_item-img">
                                   <img src={image} alt={title} />
                              </div>
                              <h3>{title}</h3>
                              <div className="portfolio_item-cta">
                                   <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                                   <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                              </div>
                         </article>
                    })}
               </div>
          </section>
     );
};

export default Portfolio;