/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox2(event) {
  return {
    type: actionTypeConstants.createPlan.togglePlaceCheckbox2,
    value: event.target.value
  };
}
