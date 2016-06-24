/* eslint-disable */
import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class OnboardingCar extends React.Component {
  render() {
    return (
      <div>
        <div className="fixed-position flexbox">
          <div className="flex-scroll-content">
            <div className="w-section title-section">
              <a href="#back" className="w-inline-block" onClick={e => {
                                                                    e.preventDefault();window.history.back();
                                                                  }}><img src="images/back-orange.png" width="14" /></a>
              <h1 className="centered">How are you rolling these days?</h1>
            </div>
            <div className="giphy-div">
              <img src="images/giphy (10).gif" />
            </div>
            <div className="w-form">
              <form data-name="Email Form"
                data-redirect="/today-blank"
                id="email-form"
                name="email-form"
                onSubmit={this.props['action.onboardingCar.submitEmailForm']}>
                <div className="w-clearfix checkbox-field radio">
                  <div className="w-radio w-clearfix checkbox-click-div radio">
                    <input data-name="Radio"
                      id="radio"
                      name="radio"
                      type="radio"
                      value="Radio"
                      className="w-radio-input checkbox-tick radio"
                      checked={this.props['state.onboardingCar.radio']}
                      onChange={this.props['action.onboardingCar.changeRadio']} />
                    <label className="w-form-label checkbox-text radio" htmlFor="radio">
                      I drive to work
                    </label>
                  </div>
                  <div className="checkbox-text">
                    I drive to work
                  </div>
                </div>
                <div className="select-passenger-div">
                  <h4>How many other people can you typically fit in your car?</h4>
                  <div className="passenger-number">
                    <img src="images/minus.png" width="40" className="minus" />
                    <div className="number">
                      3
                    </div><img src="images/plus.png" width="40" />
                  </div>
                </div>
                <div className="w-clearfix checkbox-field radio">
                  <div className="w-radio w-clearfix checkbox-click-div radio">
                    <input data-name="Radio 2"
                      id="radio"
                      name="radio-2"
                      type="radio"
                      value="Radio"
                      className="w-radio-input checkbox-tick radio"
                      checked={this.props['state.onboardingCar.radio']}
                      onChange={this.props['action.onboardingCar.changeRadio']} />
                    <label className="w-form-label checkbox-text radio" htmlFor="radio">
                      I drive to work
                    </label>
                  </div>
                  <div className="checkbox-text">
                    I don't drive to work
                  </div>
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
          </div>
          <div className="bottom-button">
            <input data-wait="Please wait..."
              type="submit"
              value="I'm hungry"
              className="w-button button-hollow" />
          </div>
        </div>
      </div>
      );
  }
}
;
const OnboardingCarWithRedux = reduxConnect(
  (state) => ({
    'state.onboardingCar.radio': state.onboardingCar.radio,
    'state.onboardingCar.radio': state.onboardingCar.radio
  }),
  {
    'action.onboardingCar.submitEmailForm': action.onboardingCar.submitEmailForm,
    'action.onboardingCar.changeRadio': action.onboardingCar.changeRadio,
    'action.onboardingCar.changeRadio': action.onboardingCar.changeRadio
  }
)(OnboardingCar);

export default OnboardingCarWithRedux;
