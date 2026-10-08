import React from 'react'
import { FiChevronDown, FiPackage, FiShield } from 'react-icons/fi'
import Nav from './Nav'

export default function Sidebar() {
  return (
    <aside className='flex h-full flex-col border-r border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl'>
      <div className='mb-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3'>
        <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-cyan-500/30'>
          A
        </div>
        <div>
          <p className='text-sm text-slate-300'>Admin</p>
          <h1 className='text-lg font-semibold text-white'>Astra Panel</h1>
        </div>
      </div>

      <div className='mb-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300'>
              <FiShield size={16} />
            </div>
            <div>
              <p className='text-xs text-slate-300'>Workspace</p>
              <p className='text-sm font-medium text-white'>Business Hub</p>
            </div>
          </div>
          <FiChevronDown className='text-slate-400' />
        </div>
      </div>

      <div className='mb-4 flex items-center justify-between px-2'>
        <p className='text-xs font-semibold uppercase tracking-[0.22em] text-slate-400'>Navigation</p>
      </div>

      <Nav />

      <div className='mt-auto rounded-2xl border border-white/10 bg-gradient-to-r from-slate-800 to-slate-900 p-4'>
        <div className='mb-3 flex items-center gap-2 text-cyan-300'>
          <FiPackage size={16} />
          <span className='text-sm font-medium'>Inventory</span>
        </div>
        <div className='flex items-end justify-between'>
          <div>
            <p className='text-2xl font-bold text-white'>1,284</p>
            <p className='text-xs text-slate-400'>Active products</p>
          </div>
          <span className='rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300'>+12%</span>
        </div>
      </div>
    </aside>
  )
}
