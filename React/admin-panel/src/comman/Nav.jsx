import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    FiBarChart2,
    FiBox,
    FiChevronDown,
    FiCreditCard,
    FiHome,
    FiSettings,
    FiShoppingBag,
    FiUsers,
} from 'react-icons/fi'

const navItems = [
    { name: 'Dashboard', to: '/', icon: FiHome },
    {
        name: 'Color',
        icon: FiSettings,
        children: [
            { name: 'Add Color', to: '/color/add' },
            { name: 'View Color', to: '/color/view' },
        ],
    },

      {
        name: 'Size',
        icon: FiSettings,
        children: [
            { name: 'Add Size', to: '/size/add' },
            { name: 'View Size', to: '/size/view' },
        ],
    },

    { name: 'Settings', to: '/settings', icon: FiSettings },
]

export default function Nav() {
    const [openMenu, setOpenMenu] = useState('Color')

    return (
        <nav className='space-y-2'>
            {navItems.map(({ name, to, icon: Icon, children }) => {
                if (children) {
                    const isOpen = openMenu === name

                    return (
                        <div key={name} className='space-y-1'>
                            <button
                                type='button'
                                onClick={() => setOpenMenu(isOpen ? '' : name)}
                                className={`flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${isOpen ? 'bg-white/10 text-white ring-1 ring-white/10' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className='flex items-center gap-3'>
                                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${isOpen ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-300'}`}>
                                        <Icon size={16} />
                                    </span>
                                    {name}
                                </span>

                                <FiChevronDown
                                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`}
                                    size={16}
                                />
                            </button>

                            {isOpen && (
                                <div className='ml-6 space-y-1 border-l border-white/10 pl-3'>
                                    {children.map(({ name: childName, to: childTo }) => (
                                        <NavLink
                                            key={childName}
                                            to={childTo}
                                            className={({ isActive }) =>
                                                `block rounded-xl px-3 py-2 text-sm transition ${isActive ? 'bg-cyan-500/10 text-cyan-300' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                                }`
                                            }
                                        >
                                            {childName}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }

                return (
                    <NavLink
                        key={name}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                            `group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${isActive ? 'bg-white/10 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-white/10' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-300'}`}>
                                    <Icon size={16} />
                                </span>
                                {name}
                            </>
                        )}
                    </NavLink>
                )
            })}
        </nav>
    )
}

export { navItems }
