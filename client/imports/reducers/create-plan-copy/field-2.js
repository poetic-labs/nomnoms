/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function field2(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.createPlanCopy.selectField2:
      return action.value;
    default:
      return state;
  }
}
