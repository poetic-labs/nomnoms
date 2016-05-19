import React from 'react';
import { Link } from 'param-store';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section sign-in-section">
          <div className="logo">
            <img src="images/logo.png" />
          </div>
        </div>
        <Link href="welcome.html" className="w-button button-hollow google" params={{  path: 'welcome'}}> Sign in with Google
        </Link>
      </div>
      );
  }
}
;
