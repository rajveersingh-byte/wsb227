import React from 'react'
import { FiBell, FiSearch, FiSettings } from 'react-icons/fi'

export default function Header() {
  return (
    <header className='flex items-center justify-between border-b border-white/10 bg-slate-900/50 px-6 py-4 backdrop-blur-xl'>
      <div className='flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2.5 shadow-inner shadow-slate-950/40'>
        <FiSearch className='text-slate-400' />
        <input
          type='search'
          placeholder='Search product, customer, order...'
          className='w-[260px] bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none'
        />
      </div>

      <div className='flex items-center gap-4'>
        <button className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300'>
          <FiBell size={18} />
        </button>

        <button className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300'>
          <FiSettings size={18} />
        </button>

        <div className='flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 text-sm font-semibold text-white'>
            JD
          </div>
          <div>
            <p className='text-sm font-medium text-white'>John Doe</p>
            <p className='text-xs text-slate-400'>Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}
