import React from 'react';
import { connect } from 'param-store';
import PlanDeetsAnotherDrive from './PlanDeetsAnotherDrive';

class PlanDeetsAnotherDriveContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'plan-deets-another-drive') {
      return null;
    }

    return <PlanDeetsAnotherDrive {...this.props}/>;
  }
}

export default connect(PlanDeetsAnotherDriveContainer, 'path');
