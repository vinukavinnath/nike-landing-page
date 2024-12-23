import React from 'react'
import { shoe8 } from '../assets/images/images'
import {Button} from '../components/components'

function SuperQuality() {
    return (
        <section id='about-us' className='max-container padding-x margin-t'>
            <div className='flex w-full flex-col lg:flex-row'>

                {/* Text Section */}
                <div className='w-full lg:w-1/2 content-center pe-5 flex flex-col items-center md:items-start'>
                    <h1 className='section-heading py-4'>We Provide You
                        <span className='text-primary'> Premium Quality </span>Shoes
                    </h1>
                    <p className='heading-subtitle my-5'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                    <p className='heading-subtitle my-5'>Our dedication to detail and excellence ensures your satisfaction
                    </p>
                    <Button>View Details</Button>
                </div>

                {/* Image Section */}
                <div className='flex flex-col w-full lg:w-1/2 justify-center items-center my-5'>
                    <img className='sm:max-w-md lg:max-w-lg' src={shoe8} alt="" />
                </div>
            </div>

        </section>
    )
}

export default SuperQuality