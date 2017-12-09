import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserKeysProvider from 'helpers/createBrowserKeysProvider';
import App from 'components/App';

const inputAdapter = createBrowserKeysProvider((keys) => {
  // eslint-disable-next-line no-console
  console.log('Provided', JSON.stringify(keys));
  const element = document.querySelector('button.isFocused');

  for (let i = 0; i < keys.length; i++) {
    const event = new window.KeyboardEvent('keydown', {
      // KeyboardEventInit
      key: keys[i],
      // eventInit
      bubbles: true,
      cancelable: true
    });

    try {
      element.dispatchEvent(event);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }

    if (event.defaultPrevented) {
      break;
    }
  }
});

function onSetup() {
  inputAdapter.activate();
}

function onTeardown() {
  inputAdapter.deactivate();
}

ReactDOM.render(
  <App
    onSetup={onSetup}
    onTeardown={onTeardown}
  />,
  document.getElementById('app')
);
