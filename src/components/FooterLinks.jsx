import React from 'react'

function FooterLinks({ title, links }) {
    return (
        <div className=''>
            <h3 className='font-montserrat text-gray-100 leading-loose py-3 font-medium text-xl'>
                {title}
            </h3>
            <ul>
                {links.map((link) => (
                    <li className='font-montserrat text-gray-400 leading-loose hover:text-gray-300 text-md'>
                        <a href={link.link}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinks