import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AISkills from './components/AISkills'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LeetCode from './components/LeetCode'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <AISkills />
        <Skills />
        <Projects />
        <LeetCode />
        <Experience />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
