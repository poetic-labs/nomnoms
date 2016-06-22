/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox3(event) {
  return {
    type: actionTypeConstants.onboardingPlaces.togglePlaceCheckbox3,
    value: event.target.value
  };
}
