var React = require("react");
var NewRecipe = require("NewRecipe");
var RecipeList = require("RecipeList");

var recipes = localStorage["recipes-storage"] === undefined ? [
  {
    food: "Pizza",
    ingredients: ["Cheese", "Tomato Sauce",
  "Dough", "Pepperoni"]
  },
  {
    food: "Ham Sandwhich",
    ingredients: ["Cheese", "Tomatoes",
  "Ham", "Bread"]
  },
  {
    food: "Cup O' Noodles",
    ingredients: ["Water", "Noodles", "MSG"]
  }
] : JSON.parse(localStorage["recipes-storage"]);

var RecipeBox = React.createClass({
  getInitialState: function() {
    return {
      recipes: recipes
    };
  },
  handleDeleteRecipe: function(index) {
    var recipes = this.state.recipes;
    recipes.splice(index, 1);

    this.setState({
      recipes: recipes
    });
    localStorage.setItem("recipes-storage", JSON.stringify(recipes));
  },
  handleAddNewRecipe: function(recipeObj) {
    var recipes = this.state.recipes;
    recipes.push(recipeObj);
    this.setState({
      recipes: recipes
    });
    localStorage.setItem("recipes-storage", JSON.stringify(recipes));
  },
  handleEditRecipe: function(editRecipeObj) {
    var recipes = this.state.recipes;
    recipes[editRecipeObj.index].food = editRecipeObj.food;
    recipes[editRecipeObj.index].ingredients = editRecipeObj.ingredients;

    this.setState({
      recipes: recipes
    });
    localStorage.setItem("recipes-storage", JSON.stringify(recipes));
  },
  render: function() {
    var recipes = this.state.recipes;

    return (
      <div>
        <h1 id="title">Recipe Box</h1>
        <NewRecipe recipes={recipes} addNewRecipe={this.handleAddNewRecipe}/>
        <RecipeList recipes={recipes} deleteRecipe={this.handleDeleteRecipe} editRecipe={this.handleEditRecipe}/>
      </div>
    )
  }
});

module.exports = RecipeBox;
