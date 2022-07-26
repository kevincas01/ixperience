import React, {useState,useEffect} from "react";

import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

import RecipeInput from './RecipeInput';
import RecipeTable from './RecipeTable';

import service from "../firebase/recipeService"

export default function RecipePage() {
    
  const [recipeBook,setRecipeBook]=useState([]);

  useEffect(()=>{
    fetchRecipes();
  },[])

  async function fetchRecipes(){
    try {
      const recipes=await service.readRecipes()
      setRecipeBook(recipes)
    }
    catch(err){
      console.log(err)
    }
  }

  async function onSubmitRecipe(recipe){
    try{
      recipe=await service.makeRecipe(recipe)

      const newRecipeBook=[...recipeBook,recipe];
      setRecipeBook(newRecipeBook);
    }
    catch(err){
      console.log(err)
    }

  }
  async function onRemoveRecipe(recipe){

    try{
    await service.removeRecipe(recipe)
        
        const newRecipeBook=recipeBook.filter((r)=>{
          return recipe.id!==r.id;
        });

        setRecipeBook(newRecipeBook);
    }
    catch(err){
    }
  }
    
    return (
        <div className="container">
          <div className="card card-body mt-5">
            <h1>Enter your favorite recipes to create a recipe book</h1>
    
            <RecipeInput onSubmitRecipe={onSubmitRecipe}></RecipeInput>
    
            <RecipeTable recipeBook={recipeBook} onRemoveRecipe={onRemoveRecipe}></RecipeTable>
            
    
          </div>
          
        </div>
      );
    
  
}
