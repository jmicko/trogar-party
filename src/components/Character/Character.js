import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Character extends Component {
  state = {
    heading: 'Character Component',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <p>
          {JSON.stringify(this.props)}
        </p>
        <Link to="/">
          home
        </Link>
        <div>
          <button
            onClick={() => {this.props.dispatch({ type: 'RETURN_TEST_1' });}}>
            test 1 reducer
          </button>
          <button
            onClick={() => {this.props.dispatch({ type: 'RETURN_TEST_2' });}}>
            test 2 reducer
          </button>
        </div>
      </div>
    );
  }
}

// change this line later when adding redux to --> connect(mapStoreToProps)(Character)

export default connect(mapStoreToProps)(Character);
