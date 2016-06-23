import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import PlacesCheckbox from './PlacesCheckbox';
import action from '../action-creators/index';

export default class OnboardingPlaces extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section title-section">
          <h1 className="centered">Where are your go-to lunch places?</h1>
        </div>
        <div className="giphy-div">
          <img src="images/giphy (8).gif" />
        </div>
        <div className="w-form option-group">
          <form id="email-form"
            name="email-form"
            data-name="Email Form"
            data-redirect="/onboarding-car"
          >
            <PlacesCheckbox />
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

const OnboardingPlacesWithRedux = reduxConnect(
  (state) => ({
    'state.onBoardingPlaces.checkboxOne': state.onBoardingPlaces.checkboxOne,
  }),
  {
    'action.onboardingPlaces.checkboxOne': action.onboardingPlaces.checkboxOne,
  }
)(OnboardingPlaces);

