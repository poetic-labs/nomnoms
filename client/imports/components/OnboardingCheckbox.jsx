import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class OnboardingCheckbox extends React.Component {
  render() {
    const { name, placeId } = this.props;

    return (
      <div
        className="w-checkbox w-clearfix checkbox-field"
        onClick={() => this.props.togglePlace(placeId)}
      >
        <input id={`${placeId}-checkbox`}
          type="checkbox"
          name={`${placeId}-checkbox`}
          data-name={`${placeId}-checkbox`}
          className="w-checkbox-input checkbox-tick"
          checked={ _.includes(this.props['state.onboardingPlaces.places'], placeId) }
        />
        <div className="checkbox-click-div" />
        <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
          {name}
        </label>
      </div>
    );
  }
}

OnboardingCheckbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  placeId: React.PropTypes.string.isRequired,
};

const OnboardingCheckboxWithRedux = reduxConnect(
  (state) => ({
    'state.onboardingPlaces.places': state.onboardingPlaces.places,
  }),
  {
    togglePlace: action.onboardingPlaces.togglePlace,
  }
)(OnboardingCheckbox);

export default OnboardingCheckboxWithRedux;
