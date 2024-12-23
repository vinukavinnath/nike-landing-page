import React from 'react'

function SocialMediaIcon({src,alt}) {
  return (
    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full'>
        <img src={src} alt={alt} />
    </div>
  )
}

export default SocialMediaIcon