import React from 'react'

function Skills({skillsData}) {
  return (
    <section className='w-full h-full py-20 flex flex-col justify-center items-center gap-20'>
        <div className='text-center flex flex-col'>
            <h2>
                Skills
            </h2>
            <p>Here's a quick breakdown of what I bring to the table</p>
        </div>
        <div className='w-full flex'>
            {skillsData.map((skills, index) => (<div key={index} className='flex w-4/12 flex-col text-center items-center justify-center gap-8'>
                <h2 className='w-1/2'>{skills.text}</h2>
                <div className='w-1/2 grid grid-cols-2 justify-items-center gap-5'>
                    {skills.img.map((img,index) =>(<img src={img} key={index} className="w-20 h-20"alt="" />))}
                </div>
            </div>))}
        </div>
    </section>
  )
}

export default Skills