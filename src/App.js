import React from 'react'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </>
  )
}

export default App
