import React, { Component, PropTypes } from 'react';

export default class Button extends Component {

  //
  // Listeners

  onKey = (event) => {
    // eslint-disable-next-line no-console
    console.log('Button#onKey:', event.type, event.keys);
  };

  //
  // Render

  render() {
    const {
      className,
      children
    } = this.props;

    return (
      <button
        className={className}
        onKey={this.onKey}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
