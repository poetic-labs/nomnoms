import React from 'react';
import { connect } from 'param-store';
import CreatePlan from './CreatePlan';

class CreatePlanContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'create-plan') {
      return null;
    }

    return <CreatePlan {...this.props}/>;
  }
}

export default connect(CreatePlanContainer, 'path');
