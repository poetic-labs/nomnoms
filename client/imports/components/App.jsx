import React from 'react';
import CreatePlanContainer from './CreatePlanContainer';
import EmailSignupContainer from './EmailSignupContainer';
import IndexContainer from './IndexContainer';
import OnboardingPlacesContainer from './OnboardingPlacesContainer';
import OnboardingTimeContainer from './OnboardingTimeContainer';
import PlanDeetsAnotherDriveContainer from './PlanDeetsAnotherDriveContainer';
import PlanDeetsContainer from './PlanDeetsContainer';
import TodayContainer from './TodayContainer';
import WelcomeContainer from './WelcomeContainer';

import { Stack } from 'react-super-components';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack index="path">
          <CreatePlanContainer index="create-plan" />
          <EmailSignupContainer index="email-signup" />
          <IndexContainer index="" />
          <OnboardingPlacesContainer index="onboarding-places" />
          <OnboardingTimeContainer index="onboarding-time" />
          <PlanDeetsAnotherDriveContainer index="plan-deets-another-driver" />
          <PlanDeetsContainer index="plan-deets" />
          <TodayContainer index="today" />
          <WelcomeContainer index="welcome" />
        </Stack>
      </Provider>
    );
  }
}

export default App;
