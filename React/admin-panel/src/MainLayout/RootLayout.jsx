import React from 'react'
import Sidebar from '../comman/Sidebar'
import Header from '../comman/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <div className='mx-auto flex min-h-screen max-w-[1800px]'>
        <div className='w-[290px] shrink-0'>
          <Sidebar />
        </div>

        <main className='flex-1 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(180deg,#0f172a_0%,#020817_100%)]'>
          <Header />
          <div className='p-4 md:p-6 lg:p-8'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
