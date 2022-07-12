import './App.css';
import ScrollReveal from 'scrollreveal'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
// import Testimonials from './components/Testimonials/Testimonials';
// import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
      header,
      #about,
      #experience,
      #portfolio,
      #contact
      `,
      {
        opacity: 0,
        interval: 300,
        delay: 500
      }
    )

  })
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />

      {/* <Services /> */}
      {/* <Testimonials /> */}
    </div>
  );
}

export default App;
