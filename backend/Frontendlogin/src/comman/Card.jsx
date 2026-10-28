import {react} from 'react';

export default function Card({ id, slug, name, image, price, category, rating, product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">

      <img
        alt={name}
        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        loading="lazy"
        src={image}
      />

      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
        {category}
      </span>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700">
            {rating}
          </span>
          <span className="text-xs text-slate-400">Customer rating</span>
        </div>
      
          <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-slate-900">
            {name}
          </h3>
     
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-xl font-bold tracking-tight text-slate-900">${price}</span>
          <button
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            type="button"
          >

            Add to bag
          </button>
        </div>
      </div>
    </article>
  )
}
