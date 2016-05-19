import React from 'react';
import CreatePlanCopyContainer from './CreatePlanCopyContainer';
import CreatePlanContainer from './CreatePlanContainer';
import EmailSignupContainer from './EmailSignupContainer';
import IndexContainer from './IndexContainer';
import OnboardingPlacesContainer from './OnboardingPlacesContainer';
import OnboardingTimeContainer from './OnboardingTimeContainer';
import PlanDeetsAnotherDriveContainer from './PlanDeetsAnotherDriveContainer';
import PlanDeetsContainer from './PlanDeetsContainer';
import StylesContainer from './StylesContainer';
import TodayBlankContainer from './TodayBlankContainer';
import TodayContainer from './TodayContainer';
import WelcomeContainer from './WelcomeContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CreatePlanCopyContainer/>
        <CreatePlanContainer/>
        <EmailSignupContainer/>
        <IndexContainer/>
        <OnboardingPlacesContainer/>
        <OnboardingTimeContainer/>
        <PlanDeetsAnotherDriveContainer/>
        <PlanDeetsContainer/>
        <StylesContainer/>
        <TodayBlankContainer/>
        <TodayContainer/>
        <WelcomeContainer/>
      </div>
      );
  }
}
