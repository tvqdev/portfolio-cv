import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'


const data = [
     {
          id: 1,
          image: IMG1,
          title: 'Lorem ipsum dolor sit amet.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'portfolio-cv-three.vercel.app'
     },
     {
          id: 1,
          image: IMG1,
          title: 'Lorem ipsum dolor sit amet.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'portfolio-cv-three.vercel.app'
     },
     {
          id: 2,
          image: IMG2,
          title: 'Lorem ipsum dolor sit amet.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'portfolio-cv-three.vercel.app'
     },
     {
          id: 4,
          image: IMG3,
          title: 'Lorem ipsum dolor sit amet.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'portfolio-cv-three.vercel.app'
     },
     {
          id: 5,
          image: IMG5,
          title: 'Lorem ipsum dolor sit amet.',
          github: 'portfolio-cv-three.vercel.app',
          demo: 'portfolio-cv-three.vercel.app'
     },
     {
          id: 6,
          image: IMG6,
          title: 'Lorem ipsum dolor sit amet.',
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
                                   <a href={github} className='btn' target='_blank'>Github</a>

                                   <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                              </div>
                         </article>
                    })}
               </div>
          </section>
     );
};

export default Portfolio;