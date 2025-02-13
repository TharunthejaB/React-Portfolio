import React from 'react'

function About() {
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center gap-16'>
        <div>
            <h2>About</h2>
        </div>
        <div className='flex justify-between w-full items-center'>
            <div className='xl:w-4/12 h-full'>
                <img src="/src/assets/T2.png" alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-7/12 flex flex-col justify-between xl:gap-4.5 items-end'>
                <div className='flex flex-col items-end gap-4.5'>
                        <h2>Hello, I'm Tharun theja Boyalla</h2>
                        <p className='text-justify'>I'm a developer, designer, and video editor who loves building intuitive UIs, crafting engaging edits, and creating interactive web apps with React. Currently exploring the MERN stack and always looking to learn something new. When I’m not working, you’ll find me at the gym or catching a good movie.</p>
                </div>
                <div className='flex gap-5'>
                    <div className='rounded-full w-20 h-20'></div>
                    <div className='rounded-full w-20 h-20'></div>
                    <div className='rounded-full w-20 h-20'></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About