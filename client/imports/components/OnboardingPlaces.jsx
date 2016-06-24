/* eslint-disable */
import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import action from '../action-creators/index';
import OnboardingCheckbox from './OnboardingCheckbox';
import Places from '../../../imports/collections/places/collection';

export default class OnboardingPlaces extends React.Component {
  render() {
    const { places } = this.props;

    return (
      <div>
        <div className="w-section title-section">
          <h1 className="centered">Where are your go-to lunch places?</h1>
        </div>
        <div className="giphy-div">
          <img src="images/giphy (8).gif" />
        </div>
        <div className="w-form option-group">
          <form id="favorite-places-form"
            name="favorite-places-form"
            data-name="Favorite Places Form"
            onSubmit={this.props['action.onboardingPlaces.submitGotoPlacesForm']}
          >
            {
              places.map(place => (
                <OnboardingCheckbox
                  key={place._id}
                  name={place.name}
                  placeId={place._id}
                />
                ))
            }
            <input type="submit"
              value="Next"
              data-wait="Please wait..."
              className="w-button button-hollow fixed"
            />
          </form>
          <div className="w-form-done">
            <p>
              Thank you! Your submission has been received!
            </p>
          </div>
          <div className="w-form-fail">
            <p>
              Oops! Something went wrong while submitting the form
            </p>
          </div>
        </div>
      </div>
    );
  }
}

OnboardingPlaces.propTypes = {
  places: React.PropTypes.array,
};

const TrainerSessionNewWithRedux = reduxConnect(
  (state) => ({
    'state.onboardingPlaces.places': state.onboardingPlaces.places,
  }),
  {
    'action.onboardingPlaces.submitGotoPlacesForm': action.onboardingPlaces.submitGotoPlacesForm,
  }
)(OnboardingPlaces);

const OnboardingPlacesWithData = createContainer((props) => {
  const places = Places.find().fetch();

  return {
    places,
    ...props,
  };
}, TrainerSessionNewWithRedux);

export default OnboardingPlacesWithData;
