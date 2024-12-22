import React from 'react'
import { star } from '../assets/icons/icons'

function PopularProductsCard({ imgURL, name, price, rating }) {
    return (
        <div>
            <div className='shoe-background flex flex-1 flex-col w-full mt-6 rounded-full shadow-xl'>
                <img src={imgURL} alt={name} />

            </div>
            <div className='ps-2'>
                <div className="flex flex-1 py-4 items-center justify-start gap-2">
                    <img src={star} alt="Star" />
                    <p className='subtitle'>{rating}</p>
                </div>
                <h3 className='text-2xl font-medium font-palanquin'>{name}</h3>
                <p className='text-primary text-xl font-medium font-montserrat'>{price}</p>

            </div>
        </div>
    )
}

export default PopularProductsCard