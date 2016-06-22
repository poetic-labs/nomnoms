/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox4(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.onboardingPlaces.togglePlaceCheckbox4:
      return !state;
    default:
      return state;
  }
}
