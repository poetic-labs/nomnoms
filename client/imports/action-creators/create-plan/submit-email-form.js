/* eslint-disable */
import ParamStore from 'param-store';
import actionTypeConstants from '../../action-type-constants/index';
import store from '../../store';
import Plans from '../../../../imports/collections/plans/collection';

export default function submitEmailForm(event) {
  event.preventDefault();

  const createPlanState = store.getState().createPlan;

  Plans.methods.createPlan.call(createPlanState, (err, result) => {
    if (err) {
      console.log('Error when trying to create a new plan.. ', err);
    }

    ParamStore.setAll({ path: 'plan-deets' });
  });

  return {
    type: actionTypeConstants.createPlan.submitEmailForm,
    value: event.target.value
  };
}
