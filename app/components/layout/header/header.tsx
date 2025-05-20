'use client'

import { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">VLADI</h1>
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-1.5' : ''}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 origin-center ${open ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
                    />
                </button>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="font-semibold px-2 py-1 text-base">
                        PRODUCTS
                    </a>
                    <a href="#" className="font-semibold px-2 py-1 text-base">
                        SERVICES
                    </a>
                    <a href="#" className="font-semibold px-2 py-1 text-base">
                        ABOUT US
                    </a>
                </nav>
                <button className="hidden md:block bg-[#333231] rounded-xl cursor-pointer text-white px-8 py-2 ml-4">
                    CONTACT US
                </button>
            </div>
            {/* Мобильное меню с плавным появлением */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-4 pb-4">
                    <nav className="flex flex-col gap-2">
                        <a href="#" className="font-semibold px-2 py-2">
                            PRODUCTS
                        </a>
                        <a href="#" className="font-semibold px-2 py-2">
                            SERVICES
                        </a>
                        <a href="#" className="font-semibold px-2 py-2">
                            ABOUT US
                        </a>
                        <button className="bg-[#333231] rounded-xl cursor-pointer text-white px-8 py-2 mt-2">
                            CONTACT US
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
