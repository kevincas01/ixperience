import React, { useState } from "react";
import { Recipe } from "../recipe";

export default function RecipeInput(props) {
  const [recipe, setRecipe] = useState("");
  const [description, setDescription] = useState("");

  function submitRecipe(event) {
    event.preventDefault();
    const id=(new Date()).getTime()
    const newRecipe = new Recipe(recipe, description, id);
    props.onSubmitRecipe(newRecipe);
    

    setRecipe("");
    setDescription("");
  }

  return (
    <div>
      <form onSubmit={submitRecipe}>
      <div className="mb-3">
        
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Recipe Name
        </label>
        <input
          value={recipe}
          onChange={(event) => {
            setRecipe(event.target.value);
          }}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Recipe Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Recipe Description
        </label>
        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={submitRecipe}
          type="button"
          className="btn btn-outline-success"
        >
          Success
        </button>

      </div>
      </form>
      
    </div>
  );
}
