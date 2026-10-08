import React from 'react'
import logo from '../assets/wscube-tech-logo-2.svg'

export default function Header() {
    return (
        <>
            <div className="max-w-[1320px] mx-auto">
                <div className="row flex justify-between">
                    <div className='logo py-3'>
                        <img src={logo} alt="wscubetech" />
                    </div>

                    <div>
                        <nav >
                            <ul className='flex py-2 px-3 gap-5'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Gallery</li>
                                <li>Contact us</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
