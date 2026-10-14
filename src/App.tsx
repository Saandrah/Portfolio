import './App.css'

import About from './components/about.tsx'
import Contact from './components/contact.tsx'
import Projects from './components/projects'
import portrait from './assets/sandra-portrait.png'


function App() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#hem">Sandra Hellström</a>

      <nav>
        <a href="#om-mig">Om mig</a>
        <a href="#hem">Hem</a>
        <a href="#projekt">Projekt</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>



<section id="hem" className="hero">
  <div className="hero-content">
  <div className="hero-text">
    <p className="hero-intro">
      Front-end x Visuell kommunikation
    </p>

    <h1>
      Kreativ design
      möter kod.
    </h1>


<div className="hero-line"></div>

    <p className="hero-description">
      Jag skapar visuella upplevelser och
      bygger dem till webben, med
      bakgrund inom grafisk design, foto
      och kommunikation.
    </p>
    </div>
    <img
  src={portrait}
  alt="Porträtt av Sandra"
  className="hero-portrait"
/>
  </div>
</section>
   <Projects />
   <About />
   <Contact />

    </>
  )
}


export default App
