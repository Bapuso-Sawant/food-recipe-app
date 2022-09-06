import React from "react";

const RecipeItem = (props) => {
    const {label,image,ingredientLines} = props;
    console.log(ingredientLines);
    return(
        <div class="col-md-3">
                    <div class="card py-2 text-center">
                        <img
                            src={image}
                            className="img-fluid w-50 mx-auto rounded-circle" />
                        <div class="card-body">
                            <h5>{label}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            {
                                ingredientLines.map(ingredient => <li className="list-group-item">{ingredient}</li>)
                            }
                        </ul>
                    </div>
                </div>
    )
}
export default RecipeItem;