/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox7(event) {
  return {
    type: actionTypeConstants.onboardingPlaces.togglePlaceCheckbox7,
    value: event.target.value
  };
}
