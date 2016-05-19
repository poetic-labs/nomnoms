import React from 'react';
import { connect } from 'param-store';
import OnboardingPlaces from './OnboardingPlaces';

class OnboardingPlacesContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'onboarding-places') {
      return null;
    }

    return <OnboardingPlaces {...this.props}/>;
  }
}

export default connect(OnboardingPlacesContainer, 'path');
