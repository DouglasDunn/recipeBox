var React = require("react");
var {Button, ButtonToolbar, Modal} = require("react-bootstrap");

var NewRecipe = React.createClass({
  getInitialState() {
    return {show: false};
  },

  showModal() {
    this.setState({show: true});
  },

  hideModal() {
    this.setState({show: false});
  },

  addRecipe() {
    var recipes = this.props.recipes;
    var food = document.getElementById("food").value;
    var ingredientsString = document.getElementById("ingredients").value;
    var ingredients = ingredientsString.split(",");

    if (food === "" || ingredientsString.length === 0) {
      return;
    }

    var recipeObj = {food, ingredients};
    this.props.addNewRecipe(recipeObj);
    this.hideModal();
  },

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" className="newRecipe" onClick={this.showModal}>
          New Recipe
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">New Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 >Recipe</h1>
            <input id="food" placeholder="Recipe"/>
            <h1>Ingredients</h1>
            <textarea id="ingredients" placeholder="Enter in ingredients separated by commas"/>
          </Modal.Body>
          <Modal.Footer>
            <Button id="#addRecipe" bsStyle="warning" onClick={this.addRecipe}>Save Recipe</Button>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
});

module.exports = NewRecipe;
