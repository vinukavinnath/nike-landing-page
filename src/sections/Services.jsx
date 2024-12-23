import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constants/data'

function Services() {
    return (
        <section className='max-container padding-x margin-t pb-9'>
            <div className='flex gap-10 sm:gap-5 flex-wrap flex-col lg:flex-row'>
                {services.map((card) => (
                    <ServiceCard key={card.label} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Services