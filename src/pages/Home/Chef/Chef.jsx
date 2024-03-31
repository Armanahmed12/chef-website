import React from 'react';
import { FcLike } from "react-icons/fc";

const Chef = ({ chefInfo }) => {
    console.log(chefInfo)
    const { img, displayName, numberOfRecipes, yearsOfExperience, likes } = chefInfo;
    return (
        <div className='border-2 border-red-500 p-2 rounded-md bg-[rgba(254,150,6,0.04)]'>
            <img className='h-[300px] w-full rounded-md' src={img} alt="" />
            <div className='mt-2'>
                <h2 className='font-semibold text-2xl text-[#001797]'>  
                     Name
          <span className='text-2xl font-serif text-[#f3630a]' style={{textShadow:'1px 1px 1px black'}}> : {displayName}</span> </h2>
                <h3 className='text-xl text-[#280174] font-semibold'>{yearsOfExperience} years experience</h3>
                <h3  className='text-xl  text-[#280174] font-semibold'>{numberOfRecipes} food recipes</h3>
                <h2  className='flex items-center text-xl  text-[#280174] font-semibold'>likes : {likes} <FcLike className='ml-2'/> </h2>
                <button className='w-full mt-8 py-2 bg-red-500 hover:bg-red-600 text-white font-bold'>View Recipes</button>
            </div>
        </div>
    );
};

export default Chef;