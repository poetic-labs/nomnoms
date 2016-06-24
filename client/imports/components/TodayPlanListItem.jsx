import React from 'react';
import { Link } from 'param-store';

class TodayPlanListItem extends React.Component {
  render() {
    const { time, where } = this.props;

    return (
          <div className="plan-option">
            <div className="w-row">
              <div className="w-col w-col-6 w-col-tiny-6 plan-column">
                <h1 className="restaurant">{where}</h1>
                <h5>@ {time}</h5>
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
    );
  }
}

TodayPlanListItem.propTypes = {
  where: React.PropTypes.string,
  time: React.PropTypes.string,
};

export default TodayPlanListItem;