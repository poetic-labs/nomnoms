/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function field3(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.selectField3:
      return action.value;
    default:
      return state;
  }
}
