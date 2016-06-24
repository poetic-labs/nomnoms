import _ from 'lodash';

function toggleInclude(array, element) {
  return _.includes(array, element)
    ? _.without(array, element)
    : _.concat(array, element);
}

export default function places(state = [], action) {
  switch (action.type) {
    case 'ONBOARDING_PLACES_TOGGLE_PLACE':
      return toggleInclude(state, action.id);
    default:
      return state;
  }
}
