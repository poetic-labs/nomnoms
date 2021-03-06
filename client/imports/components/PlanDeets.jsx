/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';
import { createContainer } from 'meteor/react-meteor-data';
import Plans from '../../../imports/collections/plans/collection';
import ParamStore from 'param-store';
import moment from 'moment';

class PlanDeets extends React.Component {
  render() {
    const { plan } = this.props;

    return (
      <div>
        <div data-ix="hide" className="w-section modal">
          <div className="w-clearfix modal-window">
            <div className="modal-window-text">
              <h2>Welcome, Evan!</h2>
              <h4>Would you like to volunteer to drive?</h4>
            </div>
            <Link href="plan-deets.html" className="w-button button-float left" params={{ path: 'plan-deets'}}> Nah
            </Link>
            <Link href="plan-deets-another-drive.html" className="w-button button-float right" params={{  path: 'plan-deets-another-drive'}}> I'd love to!
            </Link>
            <div className="centered-div absolute modal-top">
              <div className="welcome-image" />
            </div>
          </div>
        </div>
        <div className="place-img">
          <img src="images/chipotle-img.jpg" width="375" />
          <Link href="onboarding-places.html" className="w-inline-block back-place" params={{ path: 'today' }}>
          <img src="images/back-white.png" width="14" />
          </Link>
        </div>
        <div className="place-info">
          <div className="w-row">
            <div className="w-col w-col-8 w-col-tiny-8">
              <h1 className="restaurant">{plan.where}</h1>
              <h5 className="time-inline">@{moment(plan.date).format('hh:mm')}</h5><a href="#" className="primary">Check out the menu »</a>
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
            <div data-ix="show-modal" className="w-col w-col-3 w-col-tiny-3 add-yourself">
              <div className="plan-person deets add-yourself" />
              <div className="name">
                Join
              </div>
            </div>
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

const PlanDeetsWithData = createContainer((props) => {
  const plan = Plans.findOne(ParamStore.get('planId'));

  return {
    plan,
    ...props,
  };
}, PlanDeets);

export default PlanDeetsWithData;
