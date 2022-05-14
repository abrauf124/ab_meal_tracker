import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RecipeSearchResultsList } from "./RecipeSearchResultsList";

export const RecipeSearchResultsListItem = ({ recipe, ingredients = [] }) => {
    const {search} = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(search);
    const selectedDate = new Date(params.get('date'));

    const missingIngredients = recipe.ingredients.filter(recipeIngredient => 
        !ingredients.some(ingredient => ingredient.name === recipeIngredient.name));
        
    const addMealWithRecipe = async () => {
        await fetch('/meals', {
            method: 'post',
            body:JSON.stringify({
                date:selectedDate,
                recipeId: recipe.id,
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        navigate('/');

        
    }
    return(
        <div className="search-list-item" onClick={addMealWithRecipe} >
            <h3>{recipe.name}</h3>
            {missingIngredients.length === 0
                ? <p>You have all the ingredients.</p>
                : <p>You're missing {missingIngredients.length} ingredients</p>}
        </div>
    );    
}
