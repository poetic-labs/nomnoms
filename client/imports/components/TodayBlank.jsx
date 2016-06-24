/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';

class TodayBlank extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section w-clearfix title-section">
          <h1 className="centered">Today's Lunch Plans</h1>
          <Link href="account.html" className="w-inline-block profile-icon" params={{  path: 'account'}}>
          <img src="images/account.png" width="26" />
          </Link>
        </div>
        <div className="plans-blank">
          <img src="images/oooooo.png" width="71" />
          <h4>No one has created a lunch plan yet! Don’t starve! Start your own.</h4>
          <Link href="create-plan.html" className="w-button button-hollow" params={{  path: 'create-plan'}}> Create a lunch plan
          </Link>
        </div>
      </div>
      );
  }
}
;

export default TodayBlank;
