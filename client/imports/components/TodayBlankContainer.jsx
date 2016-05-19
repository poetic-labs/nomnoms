import React from 'react';
import { connect } from 'param-store';
import TodayBlank from './TodayBlank';

class TodayBlankContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'today-blank') {
      return null;
    }

    return <TodayBlank {...this.props}/>;
  }
}

export default connect(TodayBlankContainer, 'path');
