import React from 'react'
import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants/data'
import hamburger from '../assets/icons/hamburger.svg'


function Nav() {
    return (
        <main className='relative'>
        <header className='max-container absolute px-10 py-8 w-full z-10 justify-between flex'>
        <nav className='flex items-center w-full'>
    {/* Logo */}
    <a href="">
        <img src={headerLogo} alt="Brand Logo" width={150} />
    </a>

    {/* Navigation Links */}
    <div className='w-full flex max-lg:hidden text-xl leading-normal'>
        <ul className='flex gap-x-20 justify-center w-10/12'>
            {navLinks.map((link) => (
                <li className='text-slate-500' key={link.label}>
                    <a href={link.href}>{link.label}</a>
                </li>
            ))}
        </ul>
        <a className='w-2/12 text-slate-800 text-right' href="#">Sign Up or Explore</a>
    </div>

    {/* Hamburger Icon */}
    <div className='hidden max-lg:block ml-auto'>
        <a href="">
            <img src={hamburger} alt="" width={25} height={25} />
        </a>
    </div>
</nav>

        </header>
        </main>
    )
}

export default Nav