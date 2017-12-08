import React from 'react';
import { render } from 'react-dom';
import EventPluginRegistry from 'react-dom/lib/EventPluginRegistry';
import ReactDOMComponentTree from 'react-dom/lib/ReactDOMComponentTree';
import ReactEventEmitterMixin from 'react-dom/lib/ReactEventEmitterMixin';
import { EventPluginHub } from 'react-dom/lib/ReactInjection';
import SimpleEventPlugin from 'react-dom/lib/SimpleEventPlugin';
import KeyEventPlugin from 'plugins/KeyEventPlugin';
import createBrowserKeysProvider from 'helpers/createBrowserKeysProvider';
import createEvent from 'helpers/createEvent';
import App from 'components/App';

// This file is responsible for rewriting React's EventPluginRegistry to remove
// unused event plugins and inject bespoke event plugins.
//
// React expects event plugins to be injected at build time, see
// `ReactDefaultInjection`. When using a standard React browser focused library
// consumers needs to use an internal unit testing hook to unset the exiting
// event plugins. Afterwards consumers are free to re-inject the appropriate
// event plugins.
//
// See: `ReactDefaultInjection` and `ReactNativeDefaultInjection` for more
// context on `EventPlugin` injections.

EventPluginRegistry._resetEventPlugins();

EventPluginHub.injectEventPluginOrder([
  'KeyEventPlugin',
  'SimpleEventPlugin'
]);

EventPluginHub.injectEventPluginsByName({
  KeyEventPlugin,
  SimpleEventPlugin
});

const inputAdapter = createBrowserKeysProvider((keys) => {
  // eslint-disable-next-line no-console
  console.log('Provided', JSON.stringify(keys));

  const element = document.querySelector('button.isFocused');
  const component = ReactDOMComponentTree.getInstanceFromNode(element);
  const event = createEvent({ type: 'key', target: element, keys });

  ReactEventEmitterMixin.handleTopLevel('topKey', component, event, element);
});

function onSetup() {
  inputAdapter.activate();
}

function onTeardown() {
  inputAdapter.deactivate();
}

render(
  <App
    onSetup={onSetup}
    onTeardown={onTeardown}
  />,
  document.getElementById('app')
);
