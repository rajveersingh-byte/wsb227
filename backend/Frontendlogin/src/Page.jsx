import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './comman/Card';


export default function Page() {
      const [Men, setMen] = useState([]);
  const [Women, setWomen] = useState([]);

  useEffect(() => {
    axios.get('https://www.wscubetech.co/ecommerce-api/products.php?categories=mens-shirts')
      .then((res) => {
        setMen(res.data.data.slice(0, 4));
      })

    axios.get('https://www.wscubetech.co/ecommerce-api/products.php?categories=tops')
      .then((res) => {
        setWomen(res.data.data.slice(0, 4));
      })
  }, [])
  return (
    <>
        <div className="max-w-[1200px] mx-auto my-5">
        <div className='max-w-[1200px] mx-auto'>
          <h1 className='text-center py-3 font-bold text-3xl'>Men's Category</h1>


          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-5'>

            {Men.length > 0 ?

              Men.map((v, i) => {
                return (
                  <Card key={v.id} id={v.id} product={v} name={v.name} slug={v.slug} image={v.image} price={v.price} />
                )
              })

              :

              (
                <p>No Card Found</p>
              )


            }


          </div>
        </div>

        <div className='max-w-[1200px] mx-auto my-5'>
          <h1 className='text-center py-3 font-bold text-3xl'>Women's Category</h1>


          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-5'>

            {Women.length > 0 ?

              Women.map((v, i) => {
                return (
                  <Card key={v.id} id={v.id} slug={v.slug} product={v} name={v.name} image={v.image} price={v.price} />
                )
              })

              :

              (
                <p>No Card Found</p>
              )


            }


          </div>
        </div>
      </div>
    </>
  )
}
