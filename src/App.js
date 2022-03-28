import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills /> 
      <Contact />
    </>
  )
}

export default App
