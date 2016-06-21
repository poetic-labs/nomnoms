/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function radio(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.onboardingTime.changeRadio:
      return action.value;
    default:
      return state;
  }
}
