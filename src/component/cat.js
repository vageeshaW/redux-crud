import React, { Component } from "react";
import axios from "axios";
import SetColor from "../component/setColor";
import * as catActions from "../store/actions/catActions";
import { connect } from "react-redux";

class Cat extends Component {
  constructor(props) {
    super(props);
    this.saveHandler = this.saveHandler.bind(this);
  }

  componentDidMount() {
    //get list of cats
    const catId = this.props.match.params.id;
    this.props.onGettingCat(catId);
  }

  deleteHandler = () => {
    const catId = this.props.match.params.id;
    this.props.onDeletingCat(catId);
    //check.....
    this.props.history.push("/");
  };

  myChangeHandler = event => {

   let nam = event.target.name;
   let val = event.target.value;
   this.props.onChangingInput({ [nam]: val })
  
  };

  saveHandler(e) {
    //update a cat
    const obj = {
      name: this.props.name,
      description: this.props.description
    };
    const catId = this.props.match.params.id;
    this.props.onUpdatingCat(catId, obj);
  }

  colorHandler = col => {
    this.setState({ color: col });
  };

  render() {
    const { input } = this.props;

   // console.log(this.props);
    const Style = {
      backgroundColor: this.props.color
    };

    return (
      <div>
        <h1 style={Style}>{this.props.name}</h1>

        <p>Name:</p>
        <input
          name="name"
          type="text"
          onChange={this.myChangeHandler}
          value={this.props.name}
        />
        <p>Description:</p>
        <input
          name="description"
          type="text"
          onChange={this.myChangeHandler}
          value={this.props.description}
        />
        <br></br>
        <button onClick={this.deleteHandler}>Delete</button>
        <button onClick={this.saveHandler}>Save Changes</button>
        <br></br>
        <br></br>
        <SetColor color={this.props.color} changeColor={this.colorHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.cat.name,
    description: state.cat.description,
    color: state.cat.color
    // title:state.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGettingCat: catId => dispatch(catActions.getCat(catId)),
    onDeletingCat: catId => dispatch(catActions.deleteCat(catId)),
    onUpdatingCat: (catId, catData) =>
      dispatch(catActions.updateCat(catId, catData)),
    onChangingInput: (obj) => dispatch(catActions.changeInputData(obj)) 
      
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cat);
