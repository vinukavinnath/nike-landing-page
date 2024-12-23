import React from 'react'

function SecondaryButton({ img, children }) {
    return (
        <div className='my-10'>
            <button className='flex gap-4 items-center bg-white px-10 py-3 text-gray-500 shadow-lg focus:outline-none hover:bg-slate-300 text-lg rounded-full font-montserrat border-2 border-gray-300'>
                {children}
                <img src={img}></img>
            </button>
        </div>
    )
}

export default SecondaryButton