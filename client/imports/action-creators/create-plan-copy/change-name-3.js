/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeName3(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.createPlanCopy.changeName3,
    value: event.target.value
  };
}
