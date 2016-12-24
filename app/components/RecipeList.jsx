var React = require("react");
var {Panel, ListGroup, ListGroupItem} = require("react-bootstrap");
var Ingredients = require("Ingredients");

var RecipeList = React.createClass({
  deleteRecipe: function(index) {
    this.props.deleteRecipe(index);
  },
  editRecipe: function(editRecipeObj) {
    this.props.editRecipe(editRecipeObj);
  },
  render: function() {
    var recipes = this.props.recipes;
    var index = 0;
    var that = this;

    var renderRecipesArray = recipes.map(function(recipe) {
        return (
          <Ingredients recipe={recipe} index={index++} deleteRecipe={that.deleteRecipe} editRecipe={that.editRecipe} key={Math.random()}/>
        );
    });

    return (
      <div className="row">
        {renderRecipesArray}
      </div>
    );
  }
});

module.exports = RecipeList;
