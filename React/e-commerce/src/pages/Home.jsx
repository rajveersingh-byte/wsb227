import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Home() {

  const [men, SetMen] = useState([]);
  const [women, SetWoMen] = useState([]);

  let MenData = async () => {
    await axios.get('https://www.wscubetech.co/ecommerce-api/products.php', {
      params: {
        categories: 'mens-shirts'
      }
    })
      .then((res) => {
        let limitData = res.data.data.slice(0, 4)
        SetMen(limitData)
      })
  }

  let WomenData = async () => {
    await axios.get('https://www.wscubetech.co/ecommerce-api/products.php', {
      params: {
        categories: 'tops'
      }
    })
      .then((res) => {
        let limitData = res.data.data.slice(0, 4)
        SetWoMen(limitData)
      })
  }


  useEffect(() => {
    MenData();
    WomenData();
  }, [])



  return (
    <>

      <div className="max-w-[1320px] mx-auto">

        <div className="row mb-5">
          <h2 className='text-center py-5 text-4xl font-bold'>Men's Category</h2>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>

            {men.length > 0 ?

              (
                men.map((v, i) => {
                  return (

                    <>
                      <article className="group border p-2">
                        <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-[#e4e8e1]">
                          <img src={v.image} alt={v.name} />

                          <span className="absolute left-3 top-3 bg-[#f8f7f3] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#18352f]">New</span>

                          <button className="absolute right-3 top-3 rounded-full bg-[#f8f7f3] p-3 text-[#18352f]" aria-label="Add linen shirt to wishlist"><FaHeart /></button>

                        </div>

                        <div className="flex items-start justify-between gap-3"><div>

                          <p className="mb-1 text-xs uppercase tracking-[0.14em] text-[#8c938c]">{v.category_name}</p>

                          <Link to={'/product-details/' + v.id}>
                            <h3 className="font-serif text-xl font-bold text-[#18352f]">
                              {v.name}
                            </h3>
                          </Link>

                          <p className="mt-1 text-sm text-[#6d756e]">{v.description}</p>

                        </div>

                          <p className="font-semibold text-[#18352f]">₹. {v.price}</p></div>

                        <div className="mt-3 flex items-center gap-1 text-xs text-[#d36f4a]">
                          {/* </FaHeart> */}
                          <span className="text-[#6d756e]">{v.rating} (32)</span>
                        </div>

                        <button className='w-full border border-1 mt-3 py-2 rounded-2xl'>Add to Cart</button>

                      </article>
                    </>



                  )
                })

              )

              : (
                <p>No Product</p>
              )

            }





          </div>
        </div>


        <div className="row my-5">
          <h2 className='text-center py-5 text-4xl font-bold'>WoMen's Category</h2>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>

            {women.length > 0 ?

              (
                women.map((v, i) => {
                  return (

                    <>
                      <article className="group border p-2">
                        <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-[#e4e8e1]">
                          <img src={v.image} alt={v.name} />

                          <span className="absolute left-3 top-3 bg-[#f8f7f3] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#18352f]">New</span>

                          <button className="absolute right-3 top-3 rounded-full bg-[#f8f7f3] p-3 text-[#18352f]" aria-label="Add linen shirt to wishlist"><FaHeart /></button>

                        </div>

                        <div className="flex items-start justify-between gap-3"><div>

                          <p className="mb-1 text-xs uppercase tracking-[0.14em] text-[#8c938c]">{v.category_name}</p>

                          <Link to={'/product-details/' + v.id}>
                            <h3 className="font-serif text-xl font-bold text-[#18352f]">
                              {v.name}
                            </h3>
                          </Link>

                          <p className="mt-1 text-sm text-[#6d756e]">{v.description}</p>

                        </div>

                          <p className="font-semibold text-[#18352f]">₹. {v.price}</p></div>

                        <div className="mt-3 flex items-center gap-1 text-xs text-[#d36f4a]">
                          {/* </FaHeart> */}
                          <span className="text-[#6d756e]">{v.rating} (32)</span>
                        </div>

                        <button className='w-full border border-1 mt-3 py-2 rounded-2xl'>Add to Cart</button>

                      </article>
                    </>



                  )
                })

              )

              : (
                <p>No Product</p>
              )

            }





          </div>
        </div>
      </div>

    </>
  )
}
