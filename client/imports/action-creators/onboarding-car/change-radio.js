/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeRadio(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.onboardingCar.changeRadio,
    value: event.target.value
  };
}
