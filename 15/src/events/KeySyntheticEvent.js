import SyntheticEvent from 'react-dom/lib/SyntheticEvent';

function KeySyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

const KeySyntheticEventInterface = {
  // Keys need only be defined. A `null` values instructs React to copy the key
  // from the nativeEvent as is, no normalization necessary.
  keys: null
};

SyntheticEvent.augmentClass(KeySyntheticEvent, KeySyntheticEventInterface);

export default KeySyntheticEvent;
