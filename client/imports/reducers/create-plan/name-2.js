/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function name2(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.changeName2:
      return action.value;
    default:
      return state;
  }
}
