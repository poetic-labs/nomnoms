/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function createPlanForm(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.createPlan.submitCreatePlanForm:
      return '';
    default:
      return state;
  }
}
