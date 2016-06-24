/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changePassword(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.emailSignup.changePassword,
    value: event.target.value
  };
}
