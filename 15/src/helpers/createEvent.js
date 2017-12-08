function constantTrue() {
  return true;
}

function constantFalse() {
  return false;
}

function Event(options) {
  for (const key in options) {
    this[key] = options[key];
  }
}

Event.prototype = {
  isPropagationStopped: constantFalse,
  isDefaultPrevented: constantFalse,
  stopPropagation() {
    this.isPropagationStopped = constantTrue;
  },
  preventDefault() {
    this.isDefaultPrevented = constantTrue;
  }
};

export default function createEvent(options) {
  return new Event(options);
}
