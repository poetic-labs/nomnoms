import React from 'react';

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
            data-redirect="/onboarding-car">
            <div className="w-checkbox w-clearfix checkbox-field">
              <input id="Place-Checkbox"
                type="checkbox"
                name="Place-Checkbox"
                data-name="Place Checkbox"
                className="w-checkbox-input checkbox-tick" />
              <div className="checkbox-click-div active" />
              <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                Chipotle
              </label>
            </div>
            <div className="w-checkbox w-clearfix checkbox-field">
              <input id="Place-Checkbox-2"
                type="checkbox"
                name="Place-Checkbox-2"
                data-name="Place Checkbox 2"
                className="w-checkbox-input checkbox-tick" />
              <div className="checkbox-click-div" />
              <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                Whole Foods Market
              </label>
            </div>
            <div className="w-checkbox w-clearfix checkbox-field">
              <input id="Place-Checkbox-3"
                type="checkbox"
                name="Place-Checkbox-3"
                data-name="Place Checkbox 3"
                className="w-checkbox-input checkbox-tick" />
              <div className="checkbox-click-div active" />
              <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                Zabak's
              </label>
            </div>
            <div className="w-checkbox w-clearfix checkbox-field">
              <input id="Place-Checkbox-4"
                type="checkbox"
                name="Place-Checkbox-4"
                data-name="Place Checkbox 4"
                className="w-checkbox-input checkbox-tick" />
              <div className="checkbox-click-div" />
              <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                Island Grill
              </label>
            </div>
            <div className="w-checkbox w-clearfix checkbox-field">
              <input id="Place-Checkbox-5"
                type="checkbox"
                name="Place-Checkbox-5"
                data-name="Place Checkbox 5"
                className="w-checkbox-input checkbox-tick" />
              <div className="checkbox-click-div" />
              <label className="w-form-label checkbox-text" htmlFor="Place-Checkbox">
                Barnaby's Cafe
              </label>
            </div>
            <input type="submit"
              value="Next"
              data-wait="Please wait..."
              className="w-button button-hollow fixed" />
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
;
