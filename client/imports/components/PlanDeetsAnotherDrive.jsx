/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';

class PlanDeetsAnotherDrive extends React.Component {
  render() {
    return (
      <div>
        <div data-ix="hide" className="w-section modal">
          <div className="w-clearfix modal-window">
            <div className="modal-window-text">
              <h2>Welcome, Evan!</h2>
              <h4>Would you like to volunteer to drive?</h4>
            </div>
            <Link href="plan-deets.html" className="w-button button-float left" params={{  path: 'plan-deets'}}> Nah
            </Link><a href="#" className="w-button button-float right">I'd love to!</a>
            <div className="centered-div absolute modal-top">
              <div className="welcome-image" />
            </div>
          </div>
        </div>
        <div className="place-img">
          <img src="images/chipotle-img.jpg" width="375" />
          <Link href="onboarding-places.html" className="w-inline-block back-place" params={{  path: 'onboarding-places'}}>
          <img src="images/back-white.png" width="14" />
          </Link>
        </div>
        <div className="place-info">
          <div className="w-row">
            <div className="w-col w-col-8 w-col-tiny-8">
              <h1 className="restaurant">Chipotle</h1>
              <h5 className="time-inline">@11:30</h5><a href="#" className="primary">Check out the menu »</a>
            </div>
            <div className="w-col w-col-4 w-col-tiny-4 directions-button">
              <img src="images/directions.svg" /><a href="#" className="primary">Directions</a>
            </div>
          </div>
        </div>
        <div className="deets-people-div">
          <h3>1 SEAT LEFT</h3>
          <div className="w-row">
            <div className="w-col w-col-3 w-col-tiny-3 deet-person-column">
              <div className="plan-person deets driver" />
              <div className="name">
                Dalia
              </div>
            </div>
            <div className="w-col w-col-3 w-col-tiny-3 deet-person-column">
              <div className="plan-person deets" />
              <div className="name">
                Suk
              </div>
            </div>
            <div className="w-col w-col-3 w-col-tiny-3 deet-person-column">
              <div className="plan-person deets" />
              <div className="name">
                Stephanie
              </div>
            </div>
            <div data-ix="show-modal" className="w-col w-col-3 w-col-tiny-3 add-yourself" />
          </div>
        </div>
        <div className="deets-people-div">
          <h3>3 SEATS LEFT</h3>
          <div className="w-row">
            <div className="w-col w-col-3 w-col-tiny-3 deet-person-column">
              <div className="plan-person deets driver" />
              <div className="name">
                Evan
              </div>
            </div>
            <div className="w-col w-col-3 w-col-tiny-3 deet-person-column" />
            <div className="w-col w-col-3 w-col-tiny-3 deet-person-column" />
            <div data-ix="show-modal" className="w-col w-col-3 w-col-tiny-3 add-yourself" />
          </div>
        </div>
        <div className="the-deets">
          <h3>THE DEETS</h3>
          <h2 className="secondary">Picking up<br />Not accepting additional orders</h2><a href="#" className="w-button button-hollow">Edit plan</a>
        </div>
      </div>
      );
  }
}
;

export default PlanDeetsAnotherDrive;
