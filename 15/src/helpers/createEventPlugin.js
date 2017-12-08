import deepExtend from 'deep-extend';
import EventConstants from 'react-dom/lib/EventConstants';
import EventPropagators from 'react-dom/lib/EventPropagators';
import SyntheticEvent from 'react-dom/lib/SyntheticEvent';

function augmentDispatchConfig(formattedName, dispatchConfig) {
  const bubbles = dispatchConfig.bubbles;
  const captures = dispatchConfig.captures;

  if (bubbles || captures) {
    const phasedRegistrationNames = {};

    if (bubbles) {
      phasedRegistrationNames.bubbled = `on${formattedName}`;
    }

    if (captures) {
      phasedRegistrationNames.captured = `on${formattedName}Capture`;
    }

    dispatchConfig.phasedRegistrationNames = phasedRegistrationNames;

  } else {
    dispatchConfig.registrationName = `on${formattedName}`;
  }

  if (!dispatchConfig.dependencies) {
    // Specs without dependencies are entirely synthetic events with no
    // supporting DOM event dependencies.
    dispatchConfig.dependencies = [];
  }
}

function extractEvents(boundDispatchConfigByTopLevelType, boundEvent, topLevelType, dispatchMarker, nativeEvent, nativeEventTarget) {
  const dispatchConfig = boundDispatchConfigByTopLevelType[topLevelType];

  if (!dispatchConfig) {
    return;
  }

  const event = boundEvent.getPooled(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);

  // Non propagating events are dispatched directly to the target component
  // instance.
  const accumulateDispatches = (dispatchConfig.bubbles || dispatchConfig.captures) ?
    EventPropagators.accumulateTwoPhaseDispatches :
    EventPropagators.accumulateDirectDispatches;

  accumulateDispatches(event);

  return event;
}

// See `EventPluginHub` for plugin interface expectations.

export default function createEventPlugin(spec) {
  const eventPlugin = {
    eventTypes: deepExtend({}, spec.eventTypes)
  };

  const dispatchConfigByTopLevelType = {};

  for (const eventName in eventPlugin.eventTypes) {
    const dispatchConfig = eventPlugin.eventTypes[eventName];
    const formattedName = eventName.charAt(0).toUpperCase() + eventName.slice(1);
    const topLevelType = `top${formattedName}`;

    augmentDispatchConfig(formattedName, dispatchConfig);

    dispatchConfigByTopLevelType[topLevelType] = dispatchConfig;

    EventConstants.topLevelTypes[topLevelType] = topLevelType;
  }

  eventPlugin.extractEvents = spec.extractEvents ||
    extractEvents.bind(null,
      dispatchConfigByTopLevelType,
      spec.Event || SyntheticEvent
    );

  return eventPlugin;
}
