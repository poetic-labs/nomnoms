import React from 'react';
import { connect } from 'param-store';
import Today from './Today';

class TodayContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'today') {
      return null;
    }

    return <Today {...this.props}/>;
  }
}

export default connect(TodayContainer, 'path');
