import React from 'react';
import { connect } from 'param-store';
import PlanDeets from './PlanDeets';

class PlanDeetsContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'plan-deets') {
      return null;
    }

    return <PlanDeets {...this.props}/>;
  }
}

export default connect(PlanDeetsContainer, 'path');
