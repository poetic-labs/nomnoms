import React from 'react';
import { connect } from 'param-store';
import Styles from './Styles';

class StylesContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'styles') {
      return null;
    }

    return <Styles {...this.props}/>;
  }
}

export default connect(StylesContainer, 'path');
