import React from 'react'
import {
  FiArrowUpRight,
  FiBox,
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
} from 'react-icons/fi'

const stats = [
  { label: 'Total Users', value: '24.8K', change: '+12.4%', icon: FiUsers, accent: 'from-cyan-500 to-blue-500' },
  { label: 'Revenue', value: '$84.2K', change: '+8.1%', icon: FiDollarSign, accent: 'from-violet-500 to-purple-500' },
  { label: 'Orders', value: '1,482', change: '+5.6%', icon: FiShoppingCart, accent: 'from-emerald-500 to-teal-500' },
  { label: 'Products', value: '3,920', change: '+18.2%', icon: FiBox, accent: 'from-amber-500 to-orange-500' },
]

const recentOrders = [
  { name: 'MacBook Pro 16', customer: 'Alicia Carter', status: 'Paid', amount: '$2,499', time: '2 mins ago' },
  { name: 'iPhone 15 Pro', customer: 'Michael Lee', status: 'Pending', amount: '$1,199', time: '18 mins ago' },
  { name: 'AirPods Max', customer: 'Sofia White', status: 'Paid', amount: '$549', time: '1 hour ago' },
]

export default function Dashbord() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm uppercase tracking-[0.24em] text-cyan-300'>Dashboard</p>
          <h2 className='mt-2 text-3xl font-bold text-white'>Welcome back, John</h2>
        </div>

        <button className='rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]'>
          + New report
        </button>
      </div>

      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map(({ label, value, change, icon: Icon, accent }) => (
          <div key={label} className='rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/20'>
            <div className='mb-5 flex items-center justify-between'>
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white`}>
                <Icon size={20} />
              </span>
              <span className='flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300'>
                <FiArrowUpRight size={12} />
                {change}
              </span>
            </div>

            <p className='text-sm text-slate-400'>{label}</p>
            <h3 className='mt-3 text-3xl font-bold text-white'>{value}</h3>
          </div>
        ))}
      </div>

      <div className='grid gap-6 xl:grid-cols-[1.5fr_0.95fr]'>
        <div className='rounded-3xl border border-white/10 bg-slate-900/60 p-6'>
          <div className='mb-6 flex items-center justify-between'>
            <div>
              <p className='text-sm text-slate-400'>Performance</p>
              <h3 className='text-xl font-semibold text-white'>Revenue overview</h3>
            </div>
            <button className='rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-200'>This month</button>
          </div>

          <div className='flex h-56 items-end gap-3'>
            {[48, 72, 58, 90, 78, 110, 96, 128, 120, 138, 126, 160].map((height, i) => (
              <div key={i} className='flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 via-blue-500 to-indigo-500' style={{ height: `${height}px` }} />
            ))}
          </div>

          <div className='mt-4 grid grid-cols-12 gap-2 text-center text-[10px] text-slate-400'>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        <div className='rounded-3xl border border-white/10 bg-slate-900/60 p-6'>
          <div className='mb-5 flex items-center justify-between'>
            <div>
              <p className='text-sm text-slate-400'>Followers</p>
              <h3 className='text-xl font-semibold text-white'>Audience</h3>
            </div>
            <span className='rounded-full bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300'>+24%</span>
          </div>

          <div className='space-y-5'>
            {[{ label: 'Organic search', value: '64%', color: 'bg-cyan-500' }, { label: 'Social media', value: '21%', color: 'bg-violet-500' }, { label: 'Email', value: '15%', color: 'bg-emerald-500' }].map(({ label, value, color }) => (
              <div key={label}>
                <div className='mb-2 flex items-center justify-between text-sm'>
                  <span className='text-slate-300'>{label}</span>
                  <span className='font-medium text-white'>{value}</span>
                </div>
                <div className='h-2.5 rounded-full bg-slate-800'>
                  <div className={`h-2.5 rounded-full ${color}`} style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='rounded-3xl border border-white/10 bg-slate-900/60 p-6'>
        <div className='mb-5 flex items-center justify-between'>
          <div>
            <p className='text-sm text-slate-400'>Latest</p>
            <h3 className='text-xl font-semibold text-white'>Recent orders</h3>
          </div>
          <button className='text-sm text-cyan-300'>View all</button>
        </div>

        <div className='overflow-hidden rounded-2xl border border-white/10'>
          <table className='min-w-full divide-y divide-white/10 text-left text-sm'>
            <thead className='bg-slate-800/80 text-slate-300'>
              <tr>
                <th className='px-4 py-3 font-medium'>Product</th>
                <th className='px-4 py-3 font-medium'>Customer</th>
                <th className='px-4 py-3 font-medium'>Status</th>
                <th className='px-4 py-3 font-medium'>Amount</th>
                <th className='px-4 py-3 font-medium'>Time</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-white/10 bg-slate-900'>
              {recentOrders.map(({ name, customer, status, amount, time }) => (
                <tr key={name} className='text-slate-200'>
                  <td className='px-4 py-3'>{name}</td>
                  <td className='px-4 py-3 text-slate-300'>{customer}</td>
                  <td className='px-4 py-3'>
                    <span className={`rounded-full px-2 py-1 text-xs ${status === 'Paid' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'}`}>
                      {status}
                    </span>
                  </td>
                  <td className='px-4 py-3'>{amount}</td>
                  <td className='px-4 py-3 text-slate-400'>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
