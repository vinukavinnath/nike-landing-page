import React from 'react'
import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants/data'
import hamburger from '../assets/icons/hamburger.svg'


function Nav() {
    return (
        <header className='px-14 py-8 w-full'>
            <nav className='flex items-center justify-between w-full'>
                {/* Logo */}
                <a href="">
                    <img src={headerLogo} alt="Brand Logo" width={150} />
                </a>

                {/* Navigation Links */}
                <div className='w-full flex max-lg:hidden text-xl leading-normal'>
                    <ul className='flex gap-x-10 justify-center w-5/6 '>
                        {navLinks.map((link) => (
                            <li className='text-slate-500' key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <a className='w-1/6 text-slate-800 text-center' href="#">Sign Up</a>
                </div>

                {/* Hamburger Icon */}
                <div className='hidden max-lg:block'>
                    <a href="">
                        <img src={hamburger} alt="" width={25} height={25} />
                    </a>
                </div>
            </nav>

        </header>
    )
}

export default Nav