/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';
import { createContainer } from 'meteor/react-meteor-data';
import Plans from '../../../imports/collections/plans/collection';
import TodayPlanListItem from './TodayPlanListItem';
import moment from 'moment';

class Today extends React.Component {
  render() {
    const { plans } = this.props;

    return (
      <div>
        <div className="w-section title-section">
          <h1 className="centered">Today's Lunch Plans</h1>
          <Link href="account.html" className="w-inline-block profile-icon" params={{ path: 'account'}}>
          <img src="images/account.png" width="26" />
          </Link>
        </div>
        <div className="plan-wrapper">
          {
            plans.map(plan => {
              const planTime = moment(plan.date).format('hh:mm');

              return (
                <TodayPlanListItem
                  key={plan._id}
                  where={plan.where}
                  planId={plan._id}
                  time={planTime}
                />
              );
            })
          }
        </div>
        <div className="padding-all">
          <Link href="create-plan.html" className="w-button button-hollow" params={{  path: 'create-plan'}}> Create a lunch plan
          </Link>
        </div>
      </div>
      );
  }
}

const TodayWithData = createContainer((props) => {
  const plans = Plans.find().fetch()

  return {
    plans,
    ...props,
  };
}, Today);

export default TodayWithData;
