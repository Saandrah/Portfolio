import './App.css'

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
  <div className="hero-text">
    <p className="hero-intro">
      Front-end x Visuell kommunikation
    </p>

    <h1>
      Kreativ design
      <br />
      möter kod.
    </h1>

    <p className="hero-description">
      Jag skapar visuella upplevelser och
      bygger dem till webben, med
      bakgrund inom grafisk design, foto
      och kommunikation.
    </p>
  </div>
</section>
</>


  )
}


export default App
