
import portrait from '../assets/Sandra-portrait.png'

function Hero() {
  return (
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
  )
}

export default Hero
