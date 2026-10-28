import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
   <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 className='text-4xl font-bold mb-6'>404 - Page Not Found</h1>
      <Link href="/" className='bg-red-500 text-white p-3 my-5 rounded-2xl'>Go back home</Link>
    </div>
  )
}
