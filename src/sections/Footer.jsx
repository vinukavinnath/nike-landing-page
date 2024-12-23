import React from 'react'
import { footerLogo } from '../assets/images/images'
import { socialMedia } from '../constants/data'
import { footerLinks } from '../constants/data'
import SocialMediaIcon from '../components/SocialMediaIcon'
import FooterLinks from '../components/FooterLinks'

function Footer() {
    return (
        <footer className=' margin-t bg-black text-white py-10'>
            <div className='max-container padding-x'>
                <div className='flex justify-between flex-wrap'>
                    <div className='flex flex-col'>
                        <img className='w-36 my-10' src={footerLogo} alt="" />
                        <p className='sm:max-w-sm font-montserrat text-gray-200 leading-loose text-md'>
                            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
                        </p>
                        <div className='flex gap-5 py-5 sm:justify-start justify-center'>
                            {socialMedia.map((item) => (
                                <SocialMediaIcon {...item} />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-1 gap-5 py-5 justify-between flex-wrap'>
                        {footerLinks.map((section) => (
                            <FooterLinks {...section} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row py-5 font-poppins sm:justify-between items-center text-gray-400'>
                    <p>© Copyright. All rights reserved.</p>
                    <p>Terms & Conditions</p>
                </div>
                <p className='text-center'>Implemented as a clone by Vinuka Vinnath</p>
            </div>
        </footer>
    )
}

export default Footer