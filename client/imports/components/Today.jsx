/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';

class Today extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section title-section">
          <h1 className="centered">Today's Lunch Plans</h1>
          <Link href="account.html" className="w-inline-block profile-icon" params={{  path: 'account'}}>
          <img src="images/account.png" width="26" />
          </Link>
        </div>
        <div className="plan-wrapper">
          <div className="plan-option">
            <div className="w-row">
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <h1 className="restaurant">Chipotle</h1>
                <h5>@ 11:30</h5>
              </div>
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <div className="w-clearfix people-lunch-plans">
                  <div className="plan-person first driver" />
                  <div className="plan-person" />
                  <div className="plan-person _3rd" />
                </div>
                <div className="seat-info">
                  <h3 className="seat-info-text">2 SEATS LEFT</h3>
                </div>
              </div>
            </div>
            <Link href="plan-deets.html" className="w-inline-block deet-arrow" params={{  path: 'plan-deets'}}>
            <img src="images/deets-arrow.png" width="12" className="arrow" />
            </Link>
          </div>
          <div className="plan-option">
            <div className="w-row">
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <h1 className="restaurant">Whole Foods Market</h1>
                <h5>@ 11:30</h5>
              </div>
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <div className="w-clearfix people-lunch-plans">
                  <div className="plan-person first" />
                  <div className="plan-person" />
                  <div className="plan-person _3rd" />
                </div>
                <div className="seat-info">
                  <h3 className="seat-info-text">NEED A DRIVER</h3>
                </div>
              </div>
            </div>
            <a href="#" className="w-inline-block deet-arrow"><img src="images/deets-arrow.png" width="12" className="arrow" /></a>
          </div>
          <div className="plan-option">
            <div className="w-row">
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <h1 className="restaurant">YMCA</h1>
                <h5>@ 1:00</h5>
              </div>
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <div className="w-clearfix people-lunch-plans">
                  <div className="plan-person first driver" />
                  <div className="plan-person" />
                  <div className="plan-person _3rd" />
                </div>
                <div className="seat-info">
                  <h3 className="seat-info-text">1 SEAT LEFT</h3>
                </div>
                <div className="w-clearfix people-lunch-plans">
                  <div className="plan-person first driver" />
                </div>
                <div className="seat-info">
                  <h3 className="seat-info-text">2 SEATS LEFT</h3>
                </div>
              </div>
            </div>
            <a href="#" className="w-inline-block deet-arrow"><img src="images/deets-arrow.png" width="12" className="arrow" /></a>
          </div>
          <div className="plan-option">
            <div className="w-row">
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <h1 className="restaurant">Barnaby's</h1>
                <h5>@ 1:30</h5>
              </div>
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <div className="w-clearfix people-lunch-plans">
                  <div className="plan-person first" />
                  <div className="plan-person" />
                  <div className="plan-person _3rd" />
                  <div className="plan-person _4th">
                    <div className="plan-person-number">
                      +2
                    </div>
                  </div>
                </div>
                <div className="seat-info">
                  <h3 className="seat-info-text">WALKING</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-all">
          <Link href="create-plan.html" className="w-button button-hollow" params={{  path: 'create-plan'}}> Create a lunch plan
          </Link>
        </div>
      </div>
      );
  }
}
;

export default Today;
