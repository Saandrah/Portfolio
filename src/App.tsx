import './App.css'

import About from './components/about.tsx'
import Contact from './components/contact.tsx'
import Projects from './components/projects'
import Header from './components/header.tsx'
import Hero from './components/hero.tsx'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Projects />
   <About />
   <Contact />

    </>
  )
  
}


export default App
