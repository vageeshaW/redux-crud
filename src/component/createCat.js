
import React, { Component } from 'react';

import * as catActions from "../store/actions/addCatActions";
import { connect } from "react-redux";


 class CreateCat extends Component {
constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
}

  

myChangeHandler = event => {

    let nam = event.target.name;
    let val = event.target.value;
    this.props.onChangingInput({ [nam]: val })
   
   };
 

    onSubmit(e) {
        e.preventDefault();
        const obj = {
          name: this.props.name,
          description: this.props.description,
        };

        this.props.onAddingCat(obj);
        this.props.history.push("/");
       
      }
     
    render() {

        console.log(this.state)

        return (
            <div>
                <p>Name:</p>
                <input
                    name="name"
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <p>Description:</p>
                <input
                    name="description"
                    type='text'
                    onChange={this.myChangeHandler}
                />

                <button onClick= {this.onSubmit}>save</button>

            </div>
        )
    }
}

const mapStateToProps = state => {
        console.log(state);
        return {
          name: state.cat.name,
          description: state.cat.description,
        
        };
      };


      const mapDispatchToProps = dispatch => {
        return {
    
          onAddingCat: (obj) => dispatch(catActions.addCat(obj)),
          onChangingInput: (obj) => dispatch(catActions.changeInputData(obj))   
        };
      };


export default connect(mapStateToProps, mapDispatchToProps)(CreateCat);