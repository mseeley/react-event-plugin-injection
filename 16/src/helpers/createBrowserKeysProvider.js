const keysByCode = {
  'ArrowLeft': ['left'],
  'ArrowRight': ['right'],
  'ArrowUp': ['up'],
  'ArrowDown': ['down'],
  'Escape': ['back'],
  'KeyX': ['exit'],
  'Space': ['play_pause']
};

export default function createBrowserKeysProvider(callback) {
  function onEvent({ code }) {
    const keys = keysByCode[code];

    if (keys) {
      // eslint-disable-next-line no-console
      console.log('Providing %s from "%s"', JSON.stringify(keys), code);

      callback(keys);
    }
  }

  return {
    activate() {
      document.addEventListener('keydown', onEvent, false);
    },
    deactivate() {
      document.removeEventListener('keydown', onEvent, false);
    }
  };
}
