import { useEffect, useState } from "react";
import Axios from "axios";
import "./recipe.css";

export function RecipeFinder() {
  const [meal, setMeal] = useState(null);

  const fetchRandomRecipe = () => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then(
      (response) => {
        const mealData = response.data.meals[0];
        setMeal(mealData);
      }
    );
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm) {
      Axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      ).then((response) => {
        const mealData = response.data.meals[0];
        setMeal(mealData);
      });
    }
  };

  const handleRandomRecipeClick = () => {
    fetchRandomRecipe();
  };

  return (
    <div className="UserGenerator">
      <div className="title_container bg-secondary ">
        <h1>Recipe Finder</h1>
        <p>
          Application &nbsp; | &nbsp; JavaScrpt &nbsp; React &nbsp;TheMealDB API
        </p>
        <div className="alert alert-primary mt-5 fs-5">
          A user-friendly web application that helps you discover a variety of
          delicious recipes. With its clean and responsive design, built using
          React and Bootstrap, makes it easy to search for specific recipes or
          generate random ones for inspiration. Explore a wide range of culinary
          delights, with detailed instructions and captivating images.
        </div>
      </div>

      <div className="recipe_container">
        <div className="container">
          <h1>Welcome to Recipe Finder</h1>

          <div className="search_bar row">
            <div className="col-md-12 col-lg-5 d-flex align-items-center justify-content-center">
              <input
                type="search"
                placeholder="type the recipe you want to search..."
                onChange={handleSearchInputChange}
                className="search_input"
              />
            </div>
            <div className="col-md-12 col-lg-2">
              <span className="search_separator">OR</span>
            </div>
            <div className="col-md-12 col-lg-5 d-flex align-items-center justify-content-center">
              <button
                onClick={handleRandomRecipeClick}
                className="random_recipe_button"
              >
                Generate Random Recipe
              </button>
            </div>
          </div>
          {meal ? (
            <div className="row">
              <div className="meal_img col-md-4">
                <h2>{meal.strMeal}</h2>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="ingredients_info col-md-8">
                <h3>Ingredients</h3>
                <ul className="ingredients_list">
                  {Object.keys(meal).map((key) => {
                    if (key.startsWith("strIngredient") && meal[key]) {
                      const ingredientIndex = key.replace("strIngredient", "");
                      const measureKey = `strMeasure${ingredientIndex}`;
                      const ingredientImage = `https://www.themealdb.com/images/ingredients/${meal[key]}-Small.png`;

                      return (
                        <li key={key} className="ingredient_item">
                          <div className="ingredient_item_content">
                            <img
                              className="ingredient_image"
                              src={ingredientImage}
                              alt={meal[key]}
                            />
                            <span className="ingredient_name">{meal[key]}</span>
                            <span className="ingredient_measure">
                              {meal[measureKey]}
                            </span>
                          </div>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>

              <p className="instructions">
                <span className="instruction-label">Instructions: </span>
                {meal.strInstructions}
              </p>
            </div>
          ) : (
            <h3>Loading meal...</h3>
          )}
        </div>
      </div>
    </div>
  );
}
