/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function submitEmailForm(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.onboardingTime.submitEmailForm,
    value: event.target.value
  };
}