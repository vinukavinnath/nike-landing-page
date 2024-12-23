import React from 'react'
import { products } from '../constants/data'
import { PopularProductsCard } from '../components/components'

function PopularProducts() {
  return (
    <section id='products' className='max-container padding-x margin-t py-16'>
      <h1 className='section-heading py-4'>Our
        <span className='text-primary'> Popular </span>Products
      </h1>
      <p className='heading-subtitle my-5'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts