import React, { Component } from 'react';
import {connect} from 'react-redux';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import {getSmurfs} from '../actions';

import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <SmurfForm />
        {this.props.smurfs.map((smurf, index) => (
          <Smurf key={index} smurf={smurf} />  
        ))}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(
  mapStateToProps,
  {getSmurfs}
)(App);
