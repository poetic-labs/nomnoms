/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox5(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.onboardingPlaces.togglePlaceCheckbox5:
      return !state;
    default:
      return state;
  }
}
