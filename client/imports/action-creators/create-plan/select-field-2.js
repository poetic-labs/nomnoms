/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function selectField2(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.createPlan.selectField2,
    value: event.target.value
  };
}
