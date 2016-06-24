/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function where(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.selectField2:
      return action.value;
    default:
      return state;
  }
}
