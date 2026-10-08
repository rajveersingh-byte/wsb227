import { useContext, useState } from 'react'
import { FaBagShopping, FaBars, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/MainContext'
import { ToastContainer } from 'react-toastify'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const { Cart } = useContext(CartContext);


  return (
    <>
       <ToastContainer />

        <header className="sticky top-0 z-50 border-b border-[#dedbd3] bg-[#f8f7f3]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="font-serif text-2xl font-bold tracking-tight text-[#18352f] transition hover:opacity-80"
        >
          morrow<span className="text-[#d36f4a]">.</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full p-2.5 text-[#18352f] transition hover:bg-[#18352f]/10 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <FaXmark className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`
            absolute left-0 top-full w-full border-b border-[#dedbd3]
            bg-[#f8f7f3] px-5 py-5 shadow-md
            transition-all duration-300
            md:static md:w-auto md:border-0 md:bg-transparent
            md:p-0 md:shadow-none
            ${menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0 md:visible md:translate-y-0 md:opacity-100'
            }
          `}
        >
          <ul className="flex flex-col gap-5 text-sm font-semibold text-[#53605a] md:flex-row md:items-center md:gap-8">

            <li>
              <Link
                onClick={closeMenu}
                to="/"
                className="block transition-colors hover:text-[#d36f4a]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                to="/product"
                className="block transition-colors hover:text-[#d36f4a]"
              >
                Shop All
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                to="/contact-us"
                className="block transition-colors hover:text-[#d36f4a]"
              >
                Contact
              </Link>
            </li>

            {/* Shopping Bag */}
            <li>
              <Link to={'/cart'}>
                <button
                  className="flex items-center gap-2 transition-colors hover:text-[#d36f4a]"
                  aria-label="Shopping bag"
                >
                  <FaBagShopping /> {Cart.length || 0}
                  <span className="md:hidden">Bag  {Cart.length || 0} </span>
                </button>
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
    
    </>
   
  )
}

