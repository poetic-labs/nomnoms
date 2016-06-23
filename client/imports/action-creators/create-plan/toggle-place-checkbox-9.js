/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function togglePlaceCheckbox9(event) {
  return {
    type: actionTypeConstants.createPlan.togglePlaceCheckbox9,
    value: event.target.value
  };
}
