/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox11(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.onboardingPlaces.togglePlaceCheckbox11:
      return !state;
    default:
      return state;
  }
}
