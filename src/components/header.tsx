
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <a className="logo" href="#hem" onClick={closeMenu}>
        Sandra Hellström
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? 'navigation open' : 'navigation'}
      >
        <a href="#hem" onClick={closeMenu}>Hem</a>
        <a href="#om-mig" onClick={closeMenu}>Om mig</a>
        <a href="#projekt" onClick={closeMenu}>Projekt</a>
        <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
      </nav>
    </header>
  )
}

export default Header
