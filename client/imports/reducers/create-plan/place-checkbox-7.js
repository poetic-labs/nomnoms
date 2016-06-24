/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox7(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.togglePlaceCheckbox7:
      return !state;
    default:
      return state;
  }
}
