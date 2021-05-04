import React, { Component } from 'react';
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
        <div>
          <button>test reducer</button>
        </div>
      </div>
    );
  }
}

// change this line later when adding redux to --> connect(mapStoreToProps)(Character)

export default connect(mapStoreToProps)(Character);
