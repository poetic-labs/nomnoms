/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox8(event) {
  return {
    type: actionTypeConstants.createPlanCopy.togglePlaceCheckbox8,
    value: event.target.value
  };
}
