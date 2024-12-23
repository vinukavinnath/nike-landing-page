import React from 'react'
import { Button } from '../components/components'

function Newsletter() {
    return (
        <section className='max-container padding-x margin-t'>
            <div className='flex gap-x-10 flex-col md:flex-row items-center justify-center lg:justify-start'>
                <h1 className='section-heading py-4 text-center md:text-start'>Sign Up for
                    <span className='text-primary'> Updates </span>& Newsletter
                </h1>

                <div className='flex justify-center items-center gap-5 h-1/3'>
                    <input type='text' className='input-field py-3' placeholder='Enter your Email' />
                    <Button>Sign Up</Button>
                </div>

            </div>
        </section>
    )
}

export default Newsletter