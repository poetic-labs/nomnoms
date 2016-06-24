/* eslint-disable */
import ParamStore from 'param-store';
import actionTypeConstants from '../../action-type-constants/index';
import store from '../../store';
import Plans from '../../../../imports/collections/plans/collection';

export default function submitEmailForm(event) {
  event.preventDefault();

  const createPlanState = store.getState().createPlan;

  const planDeets = {
    plan: createPlanState,
    userId: Meteor.userId(),
  };

  Plans.methods.createPlan.call(planDeets, (err, result) => {
    if (err) {
      console.log('Error when trying to create a new plan.. ', err);
    }

    console.log(result);

    ParamStore.setAll({ path: 'plan-deets', planId: result._id });
  });

  return {
    type: actionTypeConstants.createPlan.submitEmailForm,
    value: event.target.value
  };
}
