/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox4(event) {
  return {
    type: actionTypeConstants.createPlanCopy.togglePlaceCheckbox4,
    value: event.target.value
  };
}
