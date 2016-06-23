/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function emailForm(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.submitEmailForm:
      return '';
    default:
      return state;
  }
}
