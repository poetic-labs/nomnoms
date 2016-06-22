/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function email2(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.emailSignup.changeEmail2:
      return action.value;
    default:
      return state;
  }
}
