/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeEmail2(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.emailSignup.changeEmail2,
    value: event.target.value
  };
}
