/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox6(event) {
  return {
    type: actionTypeConstants.onboardingPlaces.togglePlaceCheckbox6,
    value: event.target.value
  };
}
