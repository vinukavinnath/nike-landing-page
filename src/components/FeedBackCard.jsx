import React from 'react'
import { star } from '../assets/icons/icons'


function FeedBackCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className='flex flex-col items-center my-10 md:my-20'>
      <div>
        <img className='rounded-full w-36' src={imgURL} alt={customerName} />
      </div>
      <p className='heading-subtitle text-center w-2/3 my-5'>{feedback}</p>
      <div>
        <div className="flex items-center justify-center gap-2 pb-2">
          <img src={star} alt="Star" />
          <p className='subtitle '>{rating}</p>
        </div>
        <p className='text-2xl font-bold font-palanquin'>{customerName}</p>
      </div>
    </div>
  )
}

export default FeedBackCard