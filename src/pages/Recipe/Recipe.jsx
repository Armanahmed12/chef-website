import React from 'react';
import '../Recipe/Recipe.css'
import { FcLike } from 'react-icons/fc';

// cookingMethod
// ingredients
// rating
// recipeName

const Recipe = ({ recipe }) => {

    const { cookingMethod, ingredients, rating, recipeName } = recipe;

    return (
        <div id='eachFoodRecipe' className='border-2 border-red-500 p-2 rounded-lg '>
            <div style={{height:'200px'}}>
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
            <button className='w-full mt-8 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md'>
                Favorite
            </button>
        </div>
    );
};

export default Recipe;