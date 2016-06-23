/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function placeCheckbox8(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.togglePlaceCheckbox8:
      return !state;
    default:
      return state;
  }
}
