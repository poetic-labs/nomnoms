import React from 'react';
import { connect } from 'param-store';
import OnboardingTime from './OnboardingTime';

class OnboardingTimeContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'onboarding-time') {
      return null;
    }

    return <OnboardingTime {...this.props}/>;
  }
}

export default connect(OnboardingTimeContainer, 'path');
