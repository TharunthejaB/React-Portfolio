import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Widgets from './Widgets'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='relative mx-5 py-10 md:mx-24 sm:mx-10 h-screen'>
        <Navbar />
        <Herosection />
        <Widgets />
      </div>
  )
}

export default App
