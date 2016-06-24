/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';
import store from '../../store';
import Users from '../../../../imports/collections/users/collection';

export default function submitGotoPlacesForm(event) {
  event.preventDefault();

  const userId = Meteor.userId();
  const state = store.getState();
  const gotoPlaces = state.onboardingPlaces.places;

  Users.methods.insertGotoPlaces.call({ userId, gotoPlaces }, (err, result) => {
    if (err) {
      console.log('Oops! ', err);
    }

    console.log('result: ', result);
  });

  return {
    type: actionTypeConstants.onboardingPlaces.submitGotoPlacesForm,
    value: event.target.value
  };
}
