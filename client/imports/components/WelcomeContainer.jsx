import React from 'react';
import { connect } from 'param-store';
import Welcome from './Welcome';

class WelcomeContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'welcome') {
      return null;
    }

    return <Welcome {...this.props}/>;
  }
}

export default connect(WelcomeContainer, 'path');
