import React from 'react';
import { FcLike } from 'react-icons/fc';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import Error from '../ErrorPage/Error';

const ChefInfo = () => {
    const chefInfo = useLoaderData();
    const doesChefInfoExist = chefInfo ? true : false;
    if(!doesChefInfoExist){
        console.log("NO data");
         return <Error/>
    }
        console.log(doesChefInfoExist);
    const { id, img, description, displayName, numberOfRecipes, likes, yearsOfExperience, recipes } = chefInfo;
    return (
        <div>

            <div id='header-container'>
                <div className='flex-row-reverse md:flex justify-center items-center text-left text-white px-4 py-4 md:py-10'>
                    <img style={{ boxShadow: '0px  0px 5px 3px blue' }} src={img} className='h-[356px] w-full md:w-2/6 rounded-md' alt="" />
                    <div className='w-full md:w-2/4 md:px-6 text-white mt-5 md:mt-0 '>
                    <div>
                            <h2 className='text-2xl font-serif' style={{ textShadow: '1px 1px 1px black' }}>  {displayName} </h2>

                            <h3 className='text-xl font-semibold'>{yearsOfExperience} years experience</h3>
                            <h3 className='text-xl  font-semibold'>{numberOfRecipes} food recipes</h3>
                            <h2 className='flex items-center text-xl font-semibold'>likes : {likes} <FcLike className='ml-2' /> </h2>
                   </div>
                        <p className='my-3 text-lg text-justify'> {description} </p>
                        <button className='w-full rounded-sm mt-8 py-2 bg-[#1b00a2] hover:bg-[#2000c0] ] text-white font-bold'> Follow my food Recipes
                        </button>
                    </div>
                </div>
            </div>

            {/* Recipe cards */}

            <h2 style={{ textShadow: '1px 1px 2px red' }} className='text-4xl text-black font-semibold font-serif text-center mt-8'>
                My Recipes
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-8 px-2 mb-18 mt-12'>
  
                {
                    recipes.map((eachRecipeObj, index) =>{

                        return  <Recipe key={index} recipe={eachRecipeObj}/>

                    })
                }

            </div>
        </div>
    );
};

export default ChefInfo;