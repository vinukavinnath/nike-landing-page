import React from 'react'
import { offer } from '../assets/images/images'
import { Button } from '../components/components'
import SecondaryButton from '../components/SecondaryButton'

function Offer() {
    return (
        <section className='max-container padding-x margin-t'>
            <div className='flex w-full flex-col lg:flex-row-reverse'>

                {/* Text Section */}
                <div className='w-full lg:w-1/2 content-center pe-5'>
                    <h1 className='section-heading py-4'>
                        <span className='text-primary'> Special </span>Offer
                    </h1>
                    <p className='heading-subtitle my-5'>
                        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
                    </p>
                    <p className='heading-subtitle '>
                        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
                    </p>
                    <div className='flex gap-x-6 justify-center lg:justify-start text-center'>
                        <Button>Shop Now</Button>
                        <SecondaryButton>Learn more</SecondaryButton>
                    </div>
                </div>

                {/* Image Section */}
                <div className='flex flex-col w-full lg:w-1/2 justify-center items-center my-8'>
                    <img className='sm:max-w-md lg:max-w-lg' src={offer} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Offer