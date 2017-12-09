import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './App.css';

export default class App extends Component {

  //
  // Lifecycle

  componentDidMount() {
    this.props.onSetup();
  }

  componentWillUnmount() {
    this.props.onTeardown();
  }

  //
  // Listeners

  onKeyDown = (event) => {
    // eslint-disable-next-line no-console
    console.log('App#onKeyDown:', event.type, event.key);
  };

  //
  // Render

  render() {
    return (
      <div
        className="App"
        onKeyDown={this.onKeyDown}
      >
        <Button
          className="isFocused"
        >
          Hi! I'm the logically focused button.
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  onSetup: PropTypes.func.isRequired,
  onTeardown: PropTypes.func.isRequired
};
