
import { useContext, useMemo } from 'react'
import { FaArrowLeft, FaMinus, FaPlus, FaShieldHalved, FaTrashCan } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/MainContext'
import { toast } from 'react-toastify'

const formatPrice = (price) => `₹ ${Number(price || 0).toLocaleString('en-IN')}`

export default function Cart() {
    const { Cart, SetCart } = useContext(CartContext)

    const subtotal = useMemo(
        () => Cart.reduce((total, item) => total + Number(item.price || 0) * Number(item.qty || 1), 0),
        [Cart]
    )

    const itemCount = useMemo(
        () => Cart.reduce((total, item) => total + Number(item.qty || 1), 0),
        [Cart]
    )

    const updateQuantity = (index, change) => {
        SetCart((currentCart) =>
            currentCart.map((item, itemIndex) => {
                if (itemIndex !== index) return item

                return {
                    ...item,
                    qty: Math.max(1, Number(item.qty || 1) + change),
                }
            })
        )
    }

    const removeItem = (index) => {
        SetCart((currentCart) => currentCart.filter((_, itemIndex) => itemIndex !== index))
        toast.success("Itme is Remove from Cart")
    }

    return (
        <main className="mx-auto max-w-7xl px-5 pb-20 pt-8 lg:px-8 lg:pt-14">
            <div className="mb-10 flex flex-col gap-4 border-b border-[#dedbd3] pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d36f4a]">
                        Your edit / {Cart.length}
                    </p>

                    <h1 className="font-serif text-4xl font-bold tracking-tight text-[#18352f] sm:text-5xl">
                        Your bag
                    </h1>

                    <p className="mt-3 text-sm text-[#6d756e]">
                        {itemCount ? 'Thoughtful pieces, reserved for you.' : 'Your considered edit is waiting for you.'}
                    </p>
                </div>

                <p className="text-sm font-semibold text-[#53605a]">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
                <section aria-label="Items in your bag">
                    <div className="hidden border-b border-[#dedbd3] pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c938c] sm:grid sm:grid-cols-[minmax(0,1fr)_120px_100px] sm:gap-5">
                        <span>Item</span>
                        <span>Quantity</span>
                        <span className="text-right">Total</span>
                    </div>

                    {Cart.length > 0 ? (
                        Cart.map((item, index) => {
                            const quantity = Number(item.qty || 1)
                            const itemTotal = Number(item.price || 0) * quantity

                            return (
                                <article key={`${item.name}-${index}`} className="group grid gap-5 border-b border-[#dedbd3] py-7 sm:grid-cols-[minmax(0,1fr)_120px_100px] sm:items-center sm:gap-5">
                                    <div className="flex gap-5">
                                        <div className="h-32 w-24 shrink-0 overflow-hidden bg-[#e4e8e1] sm:h-36 sm:w-28">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center px-3 text-center font-serif text-sm text-[#8c938c]">
                                                    Lune Studio
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex min-w-0 flex-col justify-center">
                                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c938c]">
                                                Lune Studio
                                            </p>

                                            <h2 className="font-serif text-xl font-bold text-[#18352f]">
                                                {item.name}
                                            </h2>

                                            <p className="mt-1 text-sm text-[#6d756e]">
                                                {item.description || 'Everyday essential'}
                                            </p>

                                            <p className="mt-3 text-sm font-semibold text-[#18352f] sm:hidden">
                                                {formatPrice(itemTotal)}
                                            </p>

                                            <button
                                                type="button"
                                                className="mt-3 flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8c938c] transition hover:text-[#d36f4a]"
                                                onClick={() => removeItem(index)}
                                            >
                                                <FaTrashCan className="text-[10px]" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex h-10 w-fit items-center border border-[#dedbd3] bg-[#fffdf9]">
                                        <button
                                            type="button"
                                            className="flex h-full w-10 items-center justify-center text-[#53605a] transition hover:bg-[#18352f] hover:text-white"
                                            onClick={() => updateQuantity(index, -1)}
                                            aria-label={`Decrease quantity for ${item.name}`}
                                        >
                                            <FaMinus className="text-[9px]" />
                                        </button>

                                        <span className="w-8 text-center text-sm font-semibold text-[#18352f]">
                                            {quantity}
                                        </span>

                                        <button
                                            type="button"
                                            className="flex h-full w-10 items-center justify-center text-[#53605a] transition hover:bg-[#18352f] hover:text-white"
                                            onClick={() => updateQuantity(index, 1)}
                                            aria-label={`Increase quantity for ${item.name}`}
                                        >
                                            <FaPlus className="text-[9px]" />
                                        </button>
                                    </div>

                                    <p className="hidden text-right text-sm font-semibold text-[#18352f] sm:block">
                                        {formatPrice(itemTotal)}
                                    </p>
                                </article>
                            )
                        })
                    ) : (
                        <div className="border-b border-[#dedbd3] py-16 text-center">
                            <p className="font-serif text-2xl font-bold text-[#18352f]">Your bag is empty</p>
                            <p className="mt-2 text-sm text-[#6d756e]">Find something considered for your everyday.</p>
                        </div>
                    )}

                    <Link
                        to="/product"
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#18352f] transition hover:text-[#d36f4a]"
                    >
                        <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
                        Continue shopping
                    </Link>
                </section>

                <aside
                    className="h-fit border border-[#dedbd3] bg-[#fffdf9] p-6 sm:p-8 lg:sticky lg:top-24"
                    aria-label="Order summary"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="font-serif text-2xl font-bold text-[#18352f]">
                            Order summary
                        </h2>

                        <span className="text-xs font-semibold text-[#8c938c]">
                            {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
                        </span>
                    </div>

                    <div className="mt-7 space-y-4 border-b border-[#dedbd3] pb-6 text-sm text-[#6d756e]">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-semibold text-[#18352f]">
                                {formatPrice(subtotal)}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className="font-semibold text-[#18352f]">
                                Complimentary
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between py-6 text-base font-bold text-[#18352f]">
                        <span>Total</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>

                    <div className="flex gap-2 border-b border-[#dedbd3] pb-6">
                        <input
                            type="text"
                            placeholder="Promo code"
                            aria-label="Promo code"
                            className="min-w-0 flex-1 border border-[#dedbd3] bg-transparent px-4 py-3 text-sm text-[#18352f] outline-none transition placeholder:text-[#9ca29c] focus:border-[#18352f]"
                        />

                        <button
                            type="button"
                            className="border border-[#18352f] px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#18352f] transition hover:bg-[#18352f] hover:text-white"
                        >
                            Apply
                        </button>
                    </div>

                    <button
                        type="button"
                        className="mt-6 w-full bg-[#d36f4a] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#b85d3b] hover:shadow-lg"
                    >
                        Proceed to checkout
                    </button>

                    <div className="mt-5 flex items-start gap-3 text-xs leading-5 text-[#6d756e]">
                        <FaShieldHalved className="mt-0.5 shrink-0 text-[#d36f4a]" />

                        <span>
                            Secure checkout. Free delivery and easy returns within 30 days.
                        </span>
                    </div>
                </aside>
            </div>
        </main>
    )
}

