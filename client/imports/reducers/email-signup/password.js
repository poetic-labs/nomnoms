/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function password(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.emailSignup.changePassword:
      return action.value;
    default:
      return state;
  }
}
