/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox2(event) {
  return {
    type: actionTypeConstants.createPlanCopy.togglePlaceCheckbox2,
    value: event.target.value
  };
}
