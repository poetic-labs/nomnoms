/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox7(event) {
  return {
    type: actionTypeConstants.createPlan.togglePlaceCheckbox7,
    value: event.target.value
  };
}
