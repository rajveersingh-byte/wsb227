import { FaChevronDown, FaHeart, FaSliders } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

export default function ProductListing() {

  const [Category, SetCategory] = useState([]);
  const [slug, SetSlug] = useState([]);
  const [min, SetMin] = useState('');
  const [max, Setmax] = useState('');
  const [short, SetShort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReacode, SettotalReacode] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const [men, SetMen] = useState([]);

  console.log(slug)

  let ProductFetch = async () => {
    await axios.get('https://www.wscubetech.co/ecommerce-api/products.php', {
      params: {
        page: currentPage,
        limit: 10,
        sorting: short,
        name: '',
        price_from: min,
        price_to: max,
        discount_from: '',
        discount_to: '',
        rating: '',
        brands: '',
        categories: slug.join(',')
      }
    })
      .then((res) => {
        SetMen(res.data.data)
        SettotalReacode(res.data.total_records);
      })
  }

  useEffect(() => {
    axios.get('https://www.wscubetech.co/ecommerce-api/categories.php')
      .then((res) => {
        SetCategory(res.data.data)
      })

    ProductFetch();
  }, [slug, min, max, short, currentPage])

  let handelPrice = (curremin, currenmax) => {
    SetMin(curremin)
    Setmax(currenmax);
  }

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-5 lg:px-8 lg:pt-12">
        <div className="mb-8 flex flex-col gap-5 border-b border-[#dedbd3] pb-6 md:mb-10 md:flex-row md:items-end md:justify-between md:pb-8">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#d36f4a] sm:text-xs">The edit / 01</p>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#18352f] sm:text-4xl md:text-5xl">Shop all pieces</h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#6d756e]">Thoughtful essentials for a considered everyday wardrobe.</p>
          </div>

          <div className="flex w-full flex-col gap-3 text-sm text-[#53605a] sm:flex-row sm:items-center sm:justify-between md:w-auto md:justify-end">
            <span className="text-sm font-medium">{men.length} pieces</span>

            <div className="relative w-full sm:w-auto">
              <FaChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[#18352f]" />
              <select
                className="w-full appearance-none border-b border-[#18352f] bg-transparent pb-2 pr-6 font-semibold text-[#18352f] outline-none sm:w-auto"
                value={short}
                onChange={(e) => SetShort(e.target.value)}
              >
                <option value="">Sort: featured</option>
                <option value="1">Name → A to Z</option>
                <option value="2">Name → Z to A</option>
                <option value="3">Price → Low to High</option>
                <option value="4">Price → High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
          <aside className={`${showFilters ? 'block' : 'hidden'} self-start rounded-2xl border border-[#dedbd3] bg-[#fffdf9] p-4 lg:block lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0`} aria-label="Product filters">
            <div className="mb-7 flex items-center justify-between lg:block">
              <div className="flex items-center gap-3"><FaSliders className="text-[#d36f4a]" /><h2 className="font-serif text-2xl font-bold text-[#18352f]">Filter by</h2></div>
              <button
                type="button"
                className="text-xs font-bold uppercase tracking-[0.16em] text-[#d36f4a]"
                onClick={() => {
                  SetSlug([]);
                  SetMin('');
                  Setmax('');
                  setCurrentPage(1);
                }}
              >
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:block">
              <fieldset className="border-t border-[#dedbd3] pt-5 lg:mb-8">
                <legend className="mb-4 text-sm font-bold text-[#18352f]">Category</legend>
                <div className="space-y-3 text-sm text-[#6d756e]">
                  {Category.map((v, i) => (
                    <label className="flex items-center gap-3" key={v.slug || i}>
                      <input
                        type="checkbox"
                        checked={slug.includes(v.slug)}
                        onChange={(e) => {
                          SetSlug((prev) => e.target.checked
                            ? [...new Set([...prev, v.slug])]
                            : prev.filter((item) => item !== v.slug));
                          setCurrentPage(1);
                        }}
                        className="accent-[#d36f4a]"
                      />
                      {v.name}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="border-t border-[#dedbd3] pt-5 lg:mb-8">
                <legend className="mb-4 text-sm font-bold text-[#18352f]">Brand</legend>
                <div className="space-y-3 text-sm text-[#6d756e]">
                  <label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Morrow</label>
                  <label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Assembly</label>
                  <label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Form &amp; Fold</label>
                  <label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Lune Studio</label>
                </div>
              </fieldset>

              <fieldset className="border-t border-[#dedbd3] pt-5 sm:col-span-2 lg:col-span-1">
                <legend className="mb-4 text-sm font-bold text-[#18352f]">Price range</legend>

                <label className="flex items-center gap-3 py-2 text-sm text-[#6d756e]">
                  <input type="checkbox" className="accent-[#d36f4a]" onChange={() => handelPrice(0, 1000)} /> ₹ 0 Rs - ₹ 1000 Rs
                </label>

                <label className="flex items-center gap-3 py-2 text-sm text-[#6d756e]">
                  <input type="checkbox" className="accent-[#d36f4a]" onChange={() => handelPrice(1000, 10000)} /> ₹ 1000 Rs - ₹ 10000 Rs
                </label>

                <label className="flex items-center gap-3 py-2 text-sm text-[#6d756e]">
                  <input type="checkbox" className="accent-[#d36f4a]" onChange={() => handelPrice(10000, 100000)} /> ₹ 10000 Rs - ₹ 100000 Rs
                </label>

                <p className="mt-4 text-sm text-[#6d756e]">Under $180</p>
              </fieldset>
            </div>
          </aside>

          <section aria-label="Product collection">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-[#6d756e]">Showing <span className="font-semibold text-[#18352f]">{men.length} of {totalReacode}</span></p>
              <button
                className="flex items-center gap-2 text-sm font-semibold text-[#18352f] lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaSliders className="text-[#d36f4a]" /> Filters
              </button>
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
              {men.length > 0 ? (
                men.map((v, i) => (
                  <article className="group overflow-hidden border border-[#e7e4db] bg-[#fffdf9] p-2.5 shadow-[0_2px_10px_rgba(24,53,47,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(24,53,47,0.08)]" key={v.id || i}>
                    <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-[#e4e8e1]">
                      <img src={v.image} alt={v.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />

                      <span className="absolute left-3 top-3 bg-[#f8f7f3] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#18352f]">New</span>

                      <button className="absolute right-3 top-3 rounded-full bg-[#f8f7f3] p-3 text-[#18352f] shadow-sm" aria-label="Add linen shirt to wishlist"><FaHeart /></button>
                    </div>

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-[#8c938c]">{v.category_name}</p>

                        <Link to={'/product-details/' + v.id}>
                          <h3 className="font-serif text-xl font-bold text-[#18352f]">
                            {v.name}
                          </h3>
                        </Link>

                        <p className="mt-1 text-sm text-[#6d756e]">{v.description}</p>
                      </div>

                      <p className="shrink-0 font-semibold text-[#18352f]">₹. {v.price}</p>
                    </div>

                    <div className="mt-3 flex items-center gap-1 text-xs text-[#d36f4a]">
                      <span className="text-[#6d756e]">{v.rating} (32)</span>
                    </div>

                    <button className="mt-3 w-full rounded-2xl border border-[#18352f] py-2.5 text-sm font-medium text-[#18352f] transition hover:bg-[#18352f] hover:text-white">Add to Cart</button>
                  </article>
                ))
              ) : (
                <p className="col-span-full py-10 text-center text-[#6d756e]">No products found.</p>
              )}
            </div>

            <div className="my-6 flex justify-center">
              <ResponsivePagination
                current={currentPage}
                total={Math.max(1, Math.ceil(totalReacode / 10))}
                onPageChange={setCurrentPage}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
