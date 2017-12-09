import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

  //
  // Listeners

  onKeyDown = (event) => {
    // eslint-disable-next-line no-console
    console.log('Button#onKeyDown:', event.type, event.key, event.keys);
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
        onKeyDown={this.onKeyDown}
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
