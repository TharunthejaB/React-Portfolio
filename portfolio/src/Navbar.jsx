import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between sticky top-10 backdrop-blur-xs'>
        <div className='w-auto'>
            <img src="/src/assets/Tharun theja Boyalla.svg" className='w-full h-full'></img>
        </div>
        <div>
            <div className="hidden gap-[8vw] sm:flex">
                <a>About</a>
                <a>Work</a>
                <a>Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar