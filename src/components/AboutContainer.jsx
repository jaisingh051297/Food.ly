import React from 'react';
import Delivery from '../img/delivery.png';
import LOGO from '../img/Food.ly_Logo.png';

const AboutContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="about">
            <div className='py-2 flex-1 flex flex-col items-start
            justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100
                px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>
                        About Container
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery}
                            className="w-full h-full object-contain"
                            alt="delivery" />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-gray-400'>
                    About us <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
                </p>
                <p className='text-base text-gray-300 text-center  md:text-left md:w-[80%]'>
                    The happiness of people is our priority.
                </p>
               
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img src={LOGO}
                    alt="hero-bg"
                />
            </div>
        </section>
    )
}
export default AboutContainer;
