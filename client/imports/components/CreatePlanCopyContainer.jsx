import React from 'react';
import { connect } from 'param-store';
import CreatePlanCopy from './CreatePlanCopy';

class CreatePlanCopyContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'create-plan-copy') {
      return null;
    }

    return <CreatePlanCopy {...this.props}/>;
  }
}

export default connect(CreatePlanCopyContainer, 'path');
