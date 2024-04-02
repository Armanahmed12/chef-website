import React from 'react';
import '../Recipe/Recipe.css'
import { FcLike } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';

// cookingMethod
// ingredients
// rating
// recipeName

const Recipe = ({ recipe }) => {

    const { cookingMethod, ingredients, rating, recipeName } = recipe;

    return (
        <div id='eachFoodRecipe' className='border-2 border-red-500 p-2 rounded-lg '>
             <ToastContainer/>
            <div className='md:h-[180px] h-auto'>
                <h2 className='mb-2'>Recipe : {recipeName}</h2>
                <ul>
                    <span>Ingredients : </span>
                    {
                        ingredients.map(eachIngredient => {

                            return eachIngredient + " ";

                        })
                    }
                </ul>
                <p>Cooking Method : {cookingMethod}</p>
                <p className='flex items-center text-xl  font-semibold'> Rating : {rating} <FcLike className='ml-2' /> </p>
            </div>
            <button onClick={(event)=>{
                 event.target.setAttribute('disabled','true');
                 toast.success('This Food-Recipe has been added.',{
                     
                      position: 'top-center'
                 })
            }} className='w-full mt-8 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md disabled:bg-opacity-50'>
                Favorite
            </button>
        </div>
    );
};

// onClick={(event)=> event.target.setAttribute('disabled','true')}

export default Recipe;