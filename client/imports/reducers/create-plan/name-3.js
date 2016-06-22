/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function name3(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.changeName3:
      return action.value;
    default:
      return state;
  }
}
