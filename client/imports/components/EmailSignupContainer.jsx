import React from 'react';
import { connect } from 'param-store';
import EmailSignup from './EmailSignup';

class EmailSignupContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'email-signup') {
      return null;
    }

    return <EmailSignup {...this.props}/>;
  }
}

export default connect(EmailSignupContainer, 'path');
