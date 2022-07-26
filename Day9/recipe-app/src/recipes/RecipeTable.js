import React from 'react'

export default function RecipeTable(props) {

    function removeRecipe(recipe){
        props.onRemoveRecipe(recipe);
    }
    return (
        <div className="  mx-4 mt-4 text-center">
            <table className="table table-success table-striped">
            <thead>
                <tr>
                <th>Recipe Name</th>
                <th>Description</th>
                <th></th>
                </tr>
            </thead>
            <tbody id="recipeBody">
                {
                    props.recipeBook.map((recipe)=>
                    <tr key={recipe.id}>
                        <td>{recipe.name}
                        </td>
                        <td>{recipe.description}
                        </td>
                        <td>
                            <button onClick={(event)=>{removeRecipe(recipe)}} type="button" className="btn btn-danger">
                            <i className="bi bi-trash3-fill"></i>
                            </button>
                        </td>
                    </tr>
                    )
                }

            </tbody>

            </table>
        </div>
    )
}
