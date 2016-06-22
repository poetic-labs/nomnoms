/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox3(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.createPlanCopy.togglePlaceCheckbox3:
      return !state;
    default:
      return state;
  }
}
