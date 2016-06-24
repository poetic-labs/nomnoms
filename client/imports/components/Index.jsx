/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';

class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="splash-bg" />
        <div className="w-section sign-in-section">
          <div className="logo">
            <img src="images/logo.png" width="326" />
          </div>
        </div>
        <div className="connect-div">
          <Link href="welcome.html" className="w-button button google" params={{  path: 'welcome'}}> Sign in with Google
          </Link>
          <Link href="welcome.html" className="w-button button slack" params={{  path: 'welcome'}}> Sign in with Slack
          </Link>
          <Link href="email-signup.html" className="w-button button email" params={{  path: 'email-signup'}}> Sign in with Email
          </Link>
        </div>
      </div>
      );
  }
}
;

export default Index;
