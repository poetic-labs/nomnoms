/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';

class Account extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section w-clearfix title-section">
          <div className="centered-div">
            <h1 className="centered">Account</h1>
          </div>
          <Link href="today.html" className="w-inline-block close-icon" params={{  path: 'today'}}>
          <img src="images/x.svg" width="26" />
          </Link>
          <a href="#" className="w-inline-block profile-icon"><img src="images/account-active.png" width="26" /></a>
        </div>
        <div className="plan-wrapper">
          <div className="w-clearfix plan-option">
            <h1 className="restaurant">Edit Lunch Places</h1>
            <Link href="onboarding-places.html" className="w-inline-block w-clearfix deet-arrow" params={{  path: 'onboarding-places'}}>
            <img src="images/deets-arrow.png" width="12" className="arrow" />
            </Link>
          </div>
          <div className="w-clearfix plan-option">
            <h1 className="restaurant">Edit Driver Settings</h1>
            <Link href="onboarding-car.html" className="w-inline-block w-clearfix deet-arrow" params={{  path: 'onboarding-car'}}>
            <img src="images/deets-arrow.png" width="12" className="arrow" />
            </Link>
          </div>
        </div>
        <div className="padding-all">
          <Link href="index.html" className="w-button button" params={{  path: 'index'}}> Log Out
          </Link>
        </div>
      </div>
      );
  }
}
;

export default Account;
