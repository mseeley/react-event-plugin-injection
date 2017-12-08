import createEventPlugin from 'helpers/createEventPlugin';
import KeySyntheticEvent from 'events/KeySyntheticEvent';

export default createEventPlugin({
  eventTypes: {
    key: {
      bubbles: true,
      // Capturing phase is disabled until we have a firm need for it. This
      // saves some work done when accumulating applicable event handlers.
      captures: false
    }
  },
  Event: KeySyntheticEvent
});
