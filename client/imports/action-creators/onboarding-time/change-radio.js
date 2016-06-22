/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeRadio(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.onboardingTime.changeRadio,
    value: event.target.value
  };
}
