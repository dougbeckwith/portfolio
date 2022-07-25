import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
