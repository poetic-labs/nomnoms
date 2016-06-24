/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox10(event) {
  return {
    type: actionTypeConstants.onboardingPlaces.togglePlaceCheckbox10,
    value: event.target.value
  };
}
