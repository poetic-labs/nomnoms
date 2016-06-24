/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox2(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.togglePlaceCheckbox2:
      return !state;
    default:
      return state;
  }
}
