import React from 'react'
import { reviews } from '../constants/data'
import FeedBackCard from '../components/FeedBackCard'

function Feedback() {
    return (
        <section className='bg-background flex flex-col items-center w-full my-5'>
            <div className='max-container padding-x margin-t text-center'>
                <h1 className='section-heading py-4'>What our
                    <span className='text-primary'> Customers </span>Say?
                </h1>
                <p className='heading-subtitle'>
                    Hear genuine stories from our satisfied customers about
                    <br />
                    their exceptional experiences with us.
                </p>
                <div className='flex flex-col md:flex-row'>
                    {reviews.map((review) => (
                        <FeedBackCard key={review.customerName} {...review} />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Feedback