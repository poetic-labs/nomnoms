/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox9(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.createPlanCopy.togglePlaceCheckbox9:
      return !state;
    default:
      return state;
  }
}
