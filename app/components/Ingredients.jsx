var React = require("react");
var {Panel, ListGroup, ListGroupItem, ButtonToolbar, Button, Modal} = require("react-bootstrap");

var Ingredients = React.createClass({
  getInitialState() {
    return {show: false};
  },

  showModal() {
    this.setState({show: true});
  },

  hideModal() {
    this.setState({show: false});
  },
  deleteRecipe: function() {
    var index = this.props.index;
    this.props.deleteRecipe(index);
  },
  editRecipe: function() {
    var index = this.props.index;
    var food = document.getElementById("food").value;
    var ingredientsString = document.getElementById("ingredients").value;
    var ingredients = ingredientsString.split(",");

    if (food === "" || ingredientsString.length === 0) {
      return;
    }

    var editRecipeObj = {food, ingredients, index};
    this.props.editRecipe(editRecipeObj);
    this.hideModal();
  },
  render: function() {
    var recipe = this.props.recipe;
    var ingredientsArray = recipe.ingredients.map(function(ingredient) {
      return (
        <ListGroupItem key={Math.random()}>{ingredient}</ListGroupItem>
      );
    });

    return (
      <Panel collapsible defaultExpanded={false} header={recipe.food} className="col-xs-10 col-sm-5 col-md-3">
        <ListGroup fill>
          {ingredientsArray}
        </ListGroup>
        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.showModal}>
            Edit
          </Button>

          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.hideModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Edit Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Recipe</h1>
              <input id="food" placeholder="Recipe" defaultValue={recipe.food}/>
              <h1>Ingredients</h1>
              <textarea id="ingredients" placeholder="Enter in ingredients separated by commas" defaultValue={recipe.ingredients.join(", ")}/>
            </Modal.Body>
            <Modal.Footer>
              <Button id="#editRecipe" bsStyle="warning" onClick={this.editRecipe}>Save Recipe</Button>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
          <Button bsStyle="danger" onClick={this.deleteRecipe}>Delete</Button>
        </ButtonToolbar>
      </Panel>
    );
  }
});

module.exports = Ingredients;
