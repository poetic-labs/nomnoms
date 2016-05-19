import React from 'react';
import { Link } from 'param-store';

export default class Today extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section title-section">
          <h1 className="centered">Today's Lunch Plans</h1>
          <a href="#" className="w-inline-block profile-icon"><img width="26" src="images/account.png" /></a>
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
            <img width="12" src="images/deets-arrow.png" className="arrow" />
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
            <a href="#" className="w-inline-block deet-arrow"><img width="12" src="images/deets-arrow.png" className="arrow" /></a>
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
            <a href="#" className="w-inline-block deet-arrow"><img width="12" src="images/deets-arrow.png" className="arrow" /></a>
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
                  <h3 className="seat-info-text">WALKING OVER</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="create-plan.html" className="w-button button-hollow fixed" params={{  path: 'create-plan'}}> Create a lunch plan
        </Link>
      </div>
      );
  }
}
;
