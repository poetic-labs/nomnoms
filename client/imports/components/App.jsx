/* eslint-disable */
import React from 'react';
import Account from './Account';
import CreatePlan from './CreatePlan';
import EmailSignup from './EmailSignup';
import Index from './Index';
import OnboardingCar from './OnboardingCar';
import OnboardingPlaces from './OnboardingPlaces';
import PlanDeetsAnotherDrive from './PlanDeetsAnotherDrive';
import PlanDeets from './PlanDeets';
import Splash from './Splash';
import Styles from './Styles';
import TodayBlank from './TodayBlank';
import TodayPlanMade from './TodayPlanMade';
import Today from './Today';
import Welcome from './Welcome';
import { Stack } from 'react-super-components';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack index="path">
          <Account index="account" />
          <CreatePlan index="create-plan" />
          <EmailSignup index="email-signup" />
          <Index index="" />
          <OnboardingCar index="onboarding-car" />
          <OnboardingPlaces index="onboarding-places" />
          <PlanDeetsAnotherDrive index="plan-deets-another-drive" />
          <PlanDeets index="plan-deets" />
          <Splash index="splash" />
          <Styles index="styles" />
          <TodayBlank index="today-blank" />
          <TodayPlanMade index="today-plan-made" />
          <Today index="today" />
          <Welcome index="welcome" />
        </Stack>
      </Provider>
      );
  }
}
;

export default App;
