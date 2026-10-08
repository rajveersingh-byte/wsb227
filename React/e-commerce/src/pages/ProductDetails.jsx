import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaArrowLeft, FaChevronDown, FaHeart, FaMinus, FaPlus, FaStar } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../Context/MainContext';
import { toast } from 'react-toastify';



export default function ProductDetails() {

  let { id } = useParams();

  let [single, setSingle] = useState([]);

  const {Cart, SetCart} = useContext(CartContext);

  useEffect(() => {

    axios.get(`https://www.wscubetech.co/new-commerce-api/productdetails?id=${id}`)
      .then((res) => {
        setSingle(res.data.product);
      })

  }, [id])


  let AddtoCart = () =>{
    
      let Obj = {
          name : single.name,
          description : single.description,
          price : single.price,
          image : single.image,
          qty : 1
      }

      SetCart([...Cart, Obj])

      toast.success('Product is on Cart');

  }


  return (
    <>

      <main className="mx-auto max-w-7xl px-5 pb-20 pt-7 lg:px-8 lg:pt-10">
        <Link to="/product" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#53605a] transition hover:text-[#d36f4a]"><FaArrowLeft className="text-xs" /> Back to shop</Link>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:gap-16">
          <section className="grid gap-3 sm:grid-cols-[92px_minmax(0,1fr)]" aria-label="Product images">
            <div className="order-2 grid grid-cols-3 gap-3 sm:order-1 sm:grid-cols-1">
              {/* {galleryImages.map((image, index) => (
                <button key={image.src} type="button" className={`aspect-[4/5] overflow-hidden border-2 ${index === 0 ? 'border-[#d36f4a]' : 'border-transparent'}`} aria-label={`View product image ${index + 1}`}>
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                </button>
              ))} */}
            </div>
            <div className="order-1 aspect-4/5 overflow-hidden bg-[#e4e8e1] sm:order-2">
              <img src={single.image} alt={single.name} className="h-full w-full object-cover" />
            </div>
          </section>

          <section className="lg:pt-3">
            <div className="flex items-start justify-between gap-6 border-b border-[#dedbd3] pb-7">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#d36f4a]">{single.category}/ New arrival</p>
                <h1 className="font-serif text-4xl font-bold tracking-tight text-[#18352f] md:text-5xl">{single.name}</h1>
                <p className="mt-3 text-sm text-[#6d756e]">{single.description}</p>
              </div>
              <button type="button" className="rounded-full border border-[#dedbd3] p-3 text-[#18352f] transition hover:border-[#d36f4a] hover:text-[#d36f4a]" aria-label="Add product to wishlist"><FaHeart /></button>
            </div>

            <div className="flex items-center justify-between border-b border-[#dedbd3] py-6">
              <p className="text-2xl font-semibold text-[#18352f]">{single.price}</p>
              <div className="flex items-center gap-2 text-sm"><span className="flex items-center gap-1 text-[#d36f4a]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span><span className="text-[#6d756e]">{single.rating} · 32 reviews</span></div>
            </div>

            <div className="space-y-7 py-7">
              <div><div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold text-[#18352f]">Color: Soft white</span><span className="h-5 w-5 rounded-full border border-[#b8b5aa] bg-[#f1eee5]" aria-hidden="true" /></div><div className="flex gap-3"><button type="button" className="h-9 w-9 rounded-full border-2 border-[#d36f4a] p-1" aria-label="Soft white selected"><span className="block h-full w-full rounded-full bg-[#f1eee5]" /></button><button type="button" className="h-9 w-9 rounded-full border border-transparent p-1" aria-label="Clay color"><span className="block h-full w-full rounded-full bg-[#b97e65]" /></button><button type="button" className="h-9 w-9 rounded-full border border-transparent p-1" aria-label="Ink color"><span className="block h-full w-full rounded-full bg-[#273633]" /></button></div></div>
              <div><div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold text-[#18352f]">Size</span><button type="button" className="text-xs font-bold uppercase tracking-[0.14em] text-[#d36f4a]">Size guide</button></div><div className="grid grid-cols-4 gap-2"><button type="button" className="border border-[#18352f] bg-[#18352f] py-3 text-sm font-semibold text-white">XS</button><button type="button" className="border border-[#dedbd3] py-3 text-sm font-semibold text-[#18352f] hover:border-[#18352f]">S</button><button type="button" className="border border-[#dedbd3] py-3 text-sm font-semibold text-[#18352f] hover:border-[#18352f]">M</button><button type="button" className="border border-[#dedbd3] py-3 text-sm font-semibold text-[#18352f] hover:border-[#18352f]">L</button></div></div>
              <div className="flex gap-3"><div className="flex items-center border border-[#dedbd3]"><button type="button" className="p-4 text-[#53605a]" aria-label="Decrease quantity"><FaMinus className="text-xs" /></button><span className="w-8 text-center text-sm font-semibold text-[#18352f]">1</span><button type="button" className="p-4 text-[#53605a]" aria-label="Increase quantity"><FaPlus className="text-xs" /></button></div>

                <button type="button" className="flex-1 bg-[#d36f4a] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#b85d3b]"
                onClick={AddtoCart}
                >

                  Add to bag
                </button>
              </div>
            </div>

            <div className="divide-y divide-[#dedbd3] border-y border-[#dedbd3] text-sm text-[#53605a]"><details open><summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-[#18352f]">Details <FaChevronDown className="text-xs" /></summary><p className="pb-5 leading-6">Cut from breathable European linen with a softly structured collar and an easy, relaxed fit. Finished with natural corozo buttons.</p></details><details><summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-[#18352f]">Shipping &amp; returns <FaChevronDown className="text-xs" /></summary><p className="pb-5 leading-6">Free shipping on orders over $100. Returns accepted within 30 days.</p></details></div>
          </section>
        </div>
      </main>
    </>
  )
}
