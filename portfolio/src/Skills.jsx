import React from 'react'

function Skills({skillsData}) {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-amber-400'>
        <div className='text-center flex flex-col'>
            <h2>
                Skills
            </h2>
            <p>Here's a quick breakdown of what I bring to the table</p>
        </div>
        <div className='w-full flex'>
            {skillsData.map((skills, index) => (<div key={index} className='flex w-4/12 flex-col text-center'>
                <h2>{skills.text}</h2>
                <div className='w-20 h-20'>
                    <img src='${skills.img[index]}' alt="" />
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default Skills