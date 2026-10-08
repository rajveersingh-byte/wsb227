import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>

      <div className='max-w-[1100px] mx-auto my-5 py-5'>

        <img className='text-center' src="https://deen3evddmddt.cloudfront.net/images/404page-img.svg" alt="404 img" />


        <div className='content text-center'>
          <h1 className='text-3xl font-bold'>Page not found!</h1>
          <p className='text-gray-300 py-3'>You have some patience, we will bring the course for you soon.</p>

          <Link to={'/'}>
            <button>Go Back</button>
          </Link>

        </div>

      </div>

    </>
  )
}
