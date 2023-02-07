import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/BG_30.png';
import { heroData } from '../utils/data';

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full id="home"'>
            <div className='py-2 flex-1 flex flex-col items-start
            justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100
                px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Bike Delivery
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery}
                            className="w-full h-full object-contain"
                            alt="delivery" />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-gray-400'>
                    The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
                </p>
                <p className='text-base text-gray-300 text-center  md:text-left md:w-[80%]'>
                    When you’re hungry, we’ll be your best friend with a bag full of warm food 
                    from our kitchen to yours. Orders up ahead of time, packed with love and fresh
                    ingredients. We’ll be at your front door in just a few minutes. The happiness 
                    of people is our priority.
                </p>
                <button type='button'
                    className='bg-gradient-to-br from-orange-400 to-orange-500
                        w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg
                        transition-all ease-in-out duration-100'
                >Order Now</button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg}
                    className='ml-auto h-420 w-full lg:w-auto lg:h-650'
                    alt="hero-bg"
                />
            </div>
        </section>
    )
}
export default HomeContainer;
