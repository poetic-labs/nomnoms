/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.onboardingPlaces.togglePlaceCheckbox:
      return !state;
    default:
      return state;
  }
}
