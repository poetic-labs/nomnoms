/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox10(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.onboardingPlaces.togglePlaceCheckbox10:
      return !state;
    default:
      return state;
  }
}
