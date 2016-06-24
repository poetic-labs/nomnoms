/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function gotoPlacesForm(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.onboardingPlaces.gotoPlacesForm:
      return '';
    default:
      return state;
  }
}
