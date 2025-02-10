import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between'>
        <div className='w-auto'>
            <img src="/src/assets/Tharun theja Boyalla.svg"></img>
        </div>
        <div>
            <div className="flex gap-[8vw]">
                <a>About</a>
                <a>Work</a>
                <a>Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar