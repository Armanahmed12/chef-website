import React from 'react';
import '../Header/Header.css';
import chefPhoto from '../../../images/Chef.png'

const Header = () => {
    return (
        <div id='header-container'>
          
            <div className='flex-row-reverse md:flex justify-center items-center text-center md:text-left text-white py-5 md:py-0'>
                <img src={chefPhoto} className='h-[356px] w-full md:w-2/6' alt="" />
                <div className='w-full md:w-2/4 px-6 text-white mt-5 md:mt-0'>
                    <h2 style={{textShadow:'2px 2px 8px red'}} className='text-4xl font-semibold font-serif'>Welcome to TasteHub</h2>
                    <p className='my-3 text-lg'>In our testHub, You will be able to find some outstanding chefs with much more experience in different types of cooking food. Besides, there are recipes for every food and all the ingredients of all the food. We wish you an incredible experience. </p>
                    <button className='font-serif font-semibold text-xl px-4 py-2 rounded-md border-2 border-white hover:bg-[#0000008f]'>Let's explore</button>
                </div>
            </div>
        </div>
    );
};

export default Header;