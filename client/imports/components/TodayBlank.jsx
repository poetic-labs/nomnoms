import React from 'react';
import { Link } from 'param-store';

export default class TodayBlank extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section w-clearfix title-section">
          <h1 className="centered">Today's Lunch Plans</h1>
          <a href="#" className="w-inline-block profile-icon"><img width="26" src="images/account.png" /></a>
        </div>
        <div className="plans-blank">
          <img width="71" src="images/oooooo.png" />
          <h4>No one has created a lunch plan yet! Don’t starve! Start your own.</h4>
        </div>
        <Link href="create-plan.html" className="w-button button-hollow" params={{  path: 'create-plan'}}> Create a lunch plan
        </Link>
      </div>
      );
  }
}
;
