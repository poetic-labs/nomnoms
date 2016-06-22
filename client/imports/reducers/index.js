/* eslint-disable */
import { combineReducers } from 'redux';
import createPlan from './create-plan/index';
import createPlanCopy from './create-plan-copy/index';
import emailSignup from './email-signup/index';
import index from './index/index';
import onboardingPlaces from './onboarding-places/index';
import onboardingTime from './onboarding-time/index';
import planDeets from './plan-deets/index';
import planDeetsAnotherDrive from './plan-deets-another-drive/index';
import styles from './styles/index';
import today from './today/index';
import todayBlank from './today-blank/index';
import welcome from './welcome/index';

export default combineReducers({
createPlan,
createPlanCopy,
emailSignup,
index,
onboardingPlaces,
onboardingTime,
planDeets,
planDeetsAnotherDrive,
styles,
today,
todayBlank,
welcome
})
