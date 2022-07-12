import React from 'react'
import About from './components/about/About'
import Home from './components/main/Home'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

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
