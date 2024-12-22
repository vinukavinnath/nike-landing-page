import React, { useState } from 'react'
import { Button, ShoeCard } from '../components/components'
import { shoes, statistics } from '../constants/data'
import background from '../assets/images/thumbnail-background.svg'
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images/images'



function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='max-container w-full flex flex-col xl:flex-row'>
      <div className='padding-x xl:w-1/2 lg:justify-center z-30'>
        <h2 className='text-2xl text-primary font-light mt-32'>Our Summer Collections</h2>
        <h1 className='text-7xl sm:text-8xl my-12 font-medium leading-tight sm:leading-tight'>
          <span className='xl:whitespace-nowrap bg-white xl:pr-5 xl:py-5'>The New Arrival</span>
          <br />
          <span className='text-primary'>Nike </span>Shoes
        </h1>
        <h3 className='subtitle'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</h3>
        <Button />
        <div className='w-full flex gap-12 my-5 flex-wrap'>
          {statistics.map((item) => (<div>
            <p className='text-3xl sm:text-5xl font-medium'>{item.value}</p>
            <p className='subtitle'>{item.label}</p>
          </div>))}
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full">
        <img className="absolute  w-full h-full object-cover opacity-50" src={background} alt="Background" />
        <img className="relative " src={bigShoeImg} alt="Shoe" width={600} height={510} />
        <div className='flex absolute sm:-bottom-16 -bottom-28'>
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.bigShoe}
              imgUrl={shoe}
              changeBigShoeImage={(bigShoe) => setBigShoeImg(bigShoe)}
              bigShoeImg={bigShoeImg} />))}

        </div>
      </div>


    </section>
  )
}

export default Hero