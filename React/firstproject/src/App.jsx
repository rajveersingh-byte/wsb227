import React from 'react'
import books from './comman/books'
import Card from './comman/Card'

export default function App() {
  return (
    <>

      <section style={{ width: '100%', height: '100vh' }} className='hero-banner'>

      </section>

      <section>
        <h1 className='text-center text-4xl font-bold py-5'>Book's Lib.</h1>

        <div className='max-w-[1170px] mx-auto my-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>

          {books.map((v, i) => {
            return (
              <Card key={v.id} id={v.id} title={v.title} img={v.coverImage} des={v.description}/>
            )
          })}

        </div>

      </section>





    </>
  )
}

