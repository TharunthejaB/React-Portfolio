  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import Navbar from './Navbar'
  import Herosection from './Herosection'
  import Widgets from './Widgets'
import About from './About'

  function App() {
    const [count, setCount] = useState(0)
    return (
        <div className='relative mx-5 md:mx-24 sm:mx-10 max-w-fit'>
          <Navbar />
          <Herosection />
          <About />
          <Widgets />
        </div>
    )
  }

  export default App
