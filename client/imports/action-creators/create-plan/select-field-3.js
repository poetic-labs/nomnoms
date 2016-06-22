/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function selectField3(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.createPlan.selectField3,
    value: event.target.value
  };
}
