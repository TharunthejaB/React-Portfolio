import React from 'react'

function Herosection() {
  return (
    <section className='w-full h-screen flex justify-between items-center -mt-8'>
      <div className='flex flex-col gap-4.5 w-7/12'>
      <div className='flex justify-between flex-col  gap-3.5'>
        <div>
          <h2>Hi, I'm Tharun theja Boyalla</h2>
          <h2>a passionate <span>UI/UX Designer</span></h2>
        </div>
        <div>
          <p>I create engaging experiences through design, storytelling, and development. Let's bring your ideas to life.</p>
        </div>
      </div>
      <div>
        <button className="rounded-[20px] w-48 h-14 cursor-pointer text-white font-medium bg-green-700">Get in touch</button>
      </div>
      </div>
      <div className='w-5/12 flex items-center justify-end'>
      <img src='/src/assets/Rectangle 15.png'></img>
      </div>
    </section>
  )
}

export default Herosection