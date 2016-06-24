/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox11(event) {
  return {
    type: actionTypeConstants.onboardingPlaces.togglePlaceCheckbox11,
    value: event.target.value
  };
}
