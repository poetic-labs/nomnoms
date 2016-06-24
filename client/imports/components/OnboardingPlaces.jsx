/* eslint-disable */
import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class OnboardingPlaces extends React.Component {
  render() {
    return (
      <div>
        <div className="fixed-position flexbox">
          <div className="w-form flex-scroll-content">
            <form data-name="Email Form"
              data-redirect="/onboarding-car"
              id="email-form"
              name="email-form"
              onSubmit={this.props['action.onboardingPlaces.submitEmailForm']}>
              <div className="w-section title-section">
                <h1 className="centered">Where are your go-to lunch places?</h1>
              </div>
              <div className="giphy-div">
                <img src="images/giphy (8).gif" />
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox"
                  id="Place-Checkbox"
                  name="Place-Checkbox"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox']} />
                <div className="checkbox-click-div active" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Chipotle
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 2"
                  id="Place-Checkbox-2"
                  name="Place-Checkbox-2"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox2']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox2']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Whole Foods Market
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 3"
                  id="Place-Checkbox-3"
                  name="Place-Checkbox-3"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox3']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox3']} />
                <div className="checkbox-click-div active" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Zabak's
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 4"
                  id="Place-Checkbox-4"
                  name="Place-Checkbox-4"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox4']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox4']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Island Grill
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 5"
                  id="Place-Checkbox-5"
                  name="Place-Checkbox-5"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox5']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox5']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Barnaby's Cafe
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 11"
                  id="Place-Checkbox-11"
                  name="Place-Checkbox-11"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox11']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox11']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Zoe's Kitchen
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 10"
                  id="Place-Checkbox-10"
                  name="Place-Checkbox-10"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox10']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox10']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Adair Kitchen
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 9"
                  id="Place-Checkbox-9"
                  name="Place-Checkbox-9"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox9']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox9']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Whataburger
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 8"
                  id="Place-Checkbox-8"
                  name="Place-Checkbox-8"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox8']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox8']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Snap Kitchen
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 7"
                  id="Place-Checkbox-7"
                  name="Place-Checkbox-7"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox7']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox7']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Daily Juice
                </label>
              </div>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Place Checkbox 6"
                  id="Place-Checkbox-6"
                  name="Place-Checkbox-6"
                  type="checkbox"
                  className="w-checkbox-input checkbox-tick"
                  checked={this.props['state.onboardingPlaces.placeCheckbox6']}
                  onChange={this.props['action.onboardingPlaces.togglePlaceCheckbox6']} />
                <div className="checkbox-click-div" />
                <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                  Cafe Express
                </label>
              </div>
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
          <div className="bottom-button">
            <input data-redirect="/onboarding-car"
              data-wait="Please wait..."
              type="submit"
              value="Next"
              className="w-button button-hollow" />
          </div>
        </div>
      </div>
      );
  }
}
;
const OnboardingPlacesWithRedux = reduxConnect(
  (state) => ({
    'state.onboardingPlaces.placeCheckbox': state.onboardingPlaces.placeCheckbox,
    'state.onboardingPlaces.placeCheckbox2': state.onboardingPlaces.placeCheckbox2,
    'state.onboardingPlaces.placeCheckbox3': state.onboardingPlaces.placeCheckbox3,
    'state.onboardingPlaces.placeCheckbox4': state.onboardingPlaces.placeCheckbox4,
    'state.onboardingPlaces.placeCheckbox5': state.onboardingPlaces.placeCheckbox5,
    'state.onboardingPlaces.placeCheckbox11': state.onboardingPlaces.placeCheckbox11,
    'state.onboardingPlaces.placeCheckbox10': state.onboardingPlaces.placeCheckbox10,
    'state.onboardingPlaces.placeCheckbox9': state.onboardingPlaces.placeCheckbox9,
    'state.onboardingPlaces.placeCheckbox8': state.onboardingPlaces.placeCheckbox8,
    'state.onboardingPlaces.placeCheckbox7': state.onboardingPlaces.placeCheckbox7,
    'state.onboardingPlaces.placeCheckbox6': state.onboardingPlaces.placeCheckbox6
  }),
  {
    'action.onboardingPlaces.submitEmailForm': action.onboardingPlaces.submitEmailForm,
    'action.onboardingPlaces.togglePlaceCheckbox': action.onboardingPlaces.togglePlaceCheckbox,
    'action.onboardingPlaces.togglePlaceCheckbox2': action.onboardingPlaces.togglePlaceCheckbox2,
    'action.onboardingPlaces.togglePlaceCheckbox3': action.onboardingPlaces.togglePlaceCheckbox3,
    'action.onboardingPlaces.togglePlaceCheckbox4': action.onboardingPlaces.togglePlaceCheckbox4,
    'action.onboardingPlaces.togglePlaceCheckbox5': action.onboardingPlaces.togglePlaceCheckbox5,
    'action.onboardingPlaces.togglePlaceCheckbox11': action.onboardingPlaces.togglePlaceCheckbox11,
    'action.onboardingPlaces.togglePlaceCheckbox10': action.onboardingPlaces.togglePlaceCheckbox10,
    'action.onboardingPlaces.togglePlaceCheckbox9': action.onboardingPlaces.togglePlaceCheckbox9,
    'action.onboardingPlaces.togglePlaceCheckbox8': action.onboardingPlaces.togglePlaceCheckbox8,
    'action.onboardingPlaces.togglePlaceCheckbox7': action.onboardingPlaces.togglePlaceCheckbox7,
    'action.onboardingPlaces.togglePlaceCheckbox6': action.onboardingPlaces.togglePlaceCheckbox6
  }
)(OnboardingPlaces);

export default OnboardingPlacesWithRedux;
