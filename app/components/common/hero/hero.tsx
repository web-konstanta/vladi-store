import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center min-h-[660px]">
            <div className="absolute inset-0 z-0">
                <Image src="/images/hero.png" alt="Анимация" fill unoptimized priority className="object-cover" />
            </div>

            <div className="relative z-10 text-center px-2 sm:px-4 max-h-[660px] max-w-xl w-full mx-auto">
                <h1 className="text-5xl sm:text-[180px] tracking-widest font-bold text-white">VLADI</h1>
                <p className="text-white text-lg max-w-[90vw] sm:max-w-[460px] mx-auto">
                    Natural blankets and plaids from Ukraine. Discover our collection, created with love and care.
                </p>
                <button className="text-white border border-white px-6 sm:px-10 py-2 mt-5 rounded-lg cursor-pointer">
                    CONTACT US
                </button>
            </div>
        </div>
    )
}

export default Hero
