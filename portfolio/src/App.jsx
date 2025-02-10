import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Herosection from './Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='relative container mx-auto pt-10 bg-red-100'>
      <Navbar />
      <Herosection />
    </div>
    </>
  )
}

export default App
