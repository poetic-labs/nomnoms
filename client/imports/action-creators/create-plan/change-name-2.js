/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeName2(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.createPlan.changeName2,
    value: event.target.value
  };
}
