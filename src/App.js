import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Alert from './Alert'
import {useState} from 'react'

const App = () => {
  // State for contact alert after submit
  const [show, setShow] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact show={show} setShow={setShow} />
      <Alert show={show} setShow={setShow} />
    </>
  )
}

export default App
