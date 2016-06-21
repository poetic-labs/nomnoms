/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function selectField(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.createPlan.selectField,
    value: event.target.value
  };
}
