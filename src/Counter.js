import React, { Component } from "react";
import { connect } from "react-redux";
import * as  actionCreator from './store/actions/actions'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>Age : {this.props.age} </div>
        <button onClick={this.props.onUp}>Up</button>
        <button onClick={this.props.onDown}>Down</button>
        {this.props.loading && <img alt="logo" src="https://cdn.worldvectorlogo.com/logos/react.svg" className="App-logo" />} 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading : state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUp: () => dispatch(actionCreator.up(10)),
    onDown: () => dispatch(actionCreator.down(10))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
