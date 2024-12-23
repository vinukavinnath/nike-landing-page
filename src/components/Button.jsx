import React from 'react'
import arrowRight from '../assets/icons/arrow-right.svg'

function Button({ img,children }) {
    return (
        <div className='my-10'>
            <button className='flex gap-4 items-center bg-primary px-10 py-3 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-primary-hover text-lg rounded-full font-montserrat'>
                {children}
                <img src={img}></img>
            </button>
        </div>
    )
}

export default Button