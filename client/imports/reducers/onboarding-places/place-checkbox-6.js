/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox6(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.onboardingPlaces.togglePlaceCheckbox6:
      return !state;
    default:
      return state;
  }
}
