/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox(event) {
  return {
    type: actionTypeConstants.onboardingPlaces.togglePlaceCheckbox,
    value: event.target.value
  };
}
