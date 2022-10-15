import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ( heroBanner ) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{heroBanner.heroBanner.smallText}</p>
            <h3>{heroBanner.heroBanner.midText}</h3>
            <h1>{heroBanner.heroBanner.largeText1}</h1>
            <img src={ urlFor(heroBanner.heroBanner.image) } alt="motorcycle" className='hero-banner-image' />
            <div>
                <Link href = {`/product/${heroBanner.heroBanner.product}`}>
                    <button type = "button">{heroBanner.heroBanner.buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner.heroBanner.desc}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeroBanner