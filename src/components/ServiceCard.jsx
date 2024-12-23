import React from 'react'

function ServiceCard({ imgURL, label, subtext }) {
    return (
        <div className='bg-white shadow-2xl rounded-xl px-10 py-5 flex-1'>
            <div className='flex bg-primary w-11 h-11 rounded-full justify-center p-2'>
                <img src={imgURL} alt={label} />
            </div>
            <h3 className='text-2xl font-semibold font-palanquin py-5'>{label}</h3>
            <p className='heading-subtitle break-words'>{subtext}</p>
        </div>
    )
}

export default ServiceCard