import React from 'react';
import foodImg from '../../../images/FoodImg.jpg'

const Food = () => {
    return (
        <div className='flex flex-col-reverse md:flex md:flex-row-reverse justify-center items-center md:gap-3 gap-0 text-center md:text-left md:py-0 mt-12 mb-24 md:px-8 px-2'>
        <img src={foodImg} className='h-[356px] w-full rounded-2xl md:px-0  md:w-3/6 my-4 md:my-0' alt="" />
        <div className='w-full md:w-2/4 md:px-0 mt-5 md:mt-0'>
            <h2 style={{textShadow:'1px 1px 1px red'}} className='text-4xl font-semibold font-serif'>Our Commitment to Exceptional Food Quality</h2>
            <p className='my-3 text-lg'>At TasteHub we pride ourselves on delivering exceptional food quality. Our dishes are meticulously crafted using the freshest ingredients sourced from local farmers and trusted suppliers. From comfort classics to gourmet delights, each bite promises a symphony of flavors and textures that will leave you craving more. Experience the difference with TasteHub where every meal is a celebration of taste and quality</p>
            <button className='font-serif font-semibold text-xl px-4 py-2 rounded-md text-white bg-black hover:bg-[#000000d6]'>Happy Experience</button>
        </div>
    </div>
    );
};

export default Food;