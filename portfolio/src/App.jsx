  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import Navbar from './Navbar'
  import Herosection from './Herosection'
  import Widgets from './Widgets'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

  function App() {
    const skills = [
      { text: "Development", img: ["/src/assets/react.svg","/src/assets/react.svg","/src/assets/react.svg"] },
      { text: "Design", img: ["/src/assets/react.svg","/src/assets/react.svg","/src/assets/react.svg"] },
      { text: "Video Editing", img: ["/src/assets/react.svg","/src/assets/react.svg","/src/assets/react.svg"] },
    ]; 
    return (
        <div className='relative mx-5 md:mx-24 sm:mx-10 max-w-fit'>
          <Navbar />
          <Herosection />
          <About />
          <Skills skillsData={skills}/>
          <Projects />
          <Widgets />
        </div>
    )
  }

  export default App
