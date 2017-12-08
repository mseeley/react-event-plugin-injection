import React, { Component, PropTypes } from 'react';
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

  onKey = (event) => {
    // eslint-disable-next-line no-console
    console.log('App#onKey:', event.type, event.keys);
  };

  //
  // Render

  render() {
    return (
      <div
        className="App"
        onKey={this.onKey}
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
