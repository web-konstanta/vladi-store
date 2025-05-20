import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className="px-5">
            <h1 className="text-center text-[48px] md:text-[86px] mt-[60px] md:mt-[120px] mb-[32px] md:mb-[48px]">
                ABOUT VLADI
            </h1>
            <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="w-full lg:w-1/2 leading-relaxed">
                    <div className="text-[#363431] text-[20px] md:text-[20px]">
                        VLADI is one of the leading European manufacturers of plaids and blankets of the highest
                        quality. The company combines traditional textile craftsmanship with modern technologies to
                        create products that give warmth, comfort and coziness every day.
                    </div>
                    <div className="mt-[24px] md:mt-[32px] flex items-start gap-3">
                        <span className="w-[40px] h-[40px] rounded-full bg-[#DCCFBF] mt-1 flex-shrink-0"></span>
                        <div className="pt-2 pl-[10px]">
                            <h3 className="text-[16px] md:text-[18px] font-bold">Time-tested quality</h3>
                            <div className="text-[14px] md:text-[18px] mt-[4px]">
                                Our products are made of selected cashmere, merino, fine and superfine New Zealand wool,
                                cotton. Our range includes bedspreads, quilted and classic blankets, plaids made of pure
                                wool, semi-sheer and cotton.
                            </div>
                        </div>
                    </div>
                    <div className="mt-[32px] md:mt-[48px] flex items-start gap-3">
                        <span className="w-[40px] h-[40px] rounded-full bg-[#B19F89] mt-1 flex-shrink-0"></span>
                        <div className="pt-2 pl-[10px]">
                            <h3 className="text-[16px] md:text-[18px] font-bold">Customized solutions for business</h3>
                            <div className="text-[14px] md:text-[16px] mt-[4px]">
                                VLADI offers corporate clients and advertising agencies exclusive products for gifts,
                                promotions and branded campaigns.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex-shrink-0">
                    <Image
                        src="/images/about.png"
                        alt="Анимация"
                        width={760}
                        height={534}
                        unoptimized
                        priority
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default About
