import React, { useState } from 'react'

export default function App() {

  const [active, Setactive] = useState(false);

  return (
    <>

      <div className="max-w-[1320px] mx-auto border border-1 my-5">
        <div className="row p-5">

          <h1 className='text-5xl font-bold py-5'>FAQ</h1>

          <div className='max-w-[550px] border border-1 p-3 rounded-full'>
            <button className='cursor-pointer'
            onClick={()=>Setactive(!active)}
            >01 Which is the best Full Stack Developer Course in Jodhpur?</button>
            <span className='ps-5'>{!active ? '↓' : '↑'} </span>

            {active && <p className='text-gray-400'>WsCube Tech offers one of the most practical Full Stack Developer Courses in Jodhpur with AI Engineering, real-world projects, expert mentorship, and placement support.</p>}

          </div>


        </div>
      </div>

    </>
  )
}
