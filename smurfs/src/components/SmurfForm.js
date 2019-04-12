import React, {Component} from 'react';
import {connect} from 'react-redux';

import {postSmurf} from '../actions';

class SmurfForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      height: '' 
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.postSmurf(this.state);
  }

  render(){
    return(
      <form 
        className="smurf-form" 
        onSubmit={this.submitHandler}
      >
        <input 
          type="text" 
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input 
          type="number" 
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.changeHandler}
        />
        <input 
          type="text" 
          name="height"
          placeholder="height"
          value={this.state.height}
          onChange={this.changeHandler}
        />
        <button>Add Smurf</button>
      </form>
    )
  }
}

export default connect(
  null,
  {postSmurf}
)(SmurfForm);
