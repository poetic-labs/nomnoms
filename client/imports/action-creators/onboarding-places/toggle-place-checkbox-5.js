/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox5(event) {
  return {
    type: actionTypeConstants.onboardingPlaces.togglePlaceCheckbox5,
    value: event.target.value
  };
}
