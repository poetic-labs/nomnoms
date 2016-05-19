import React from 'react';
import { Link } from 'param-store';

export default class OnboardingTime extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section title-section">
          <Link href="onboarding-places.html" className="w-inline-block" params={{  path: 'onboarding-places'}}>
          <img width="14" src="images/back-orange.png" />
          </Link>
          <h1 className="centered">How are you rolling these days?</h1>
        </div>
        <div className="giphy-div">
          <img src="images/giphy (10).gif" />
        </div>
        <div className="w-form">
          <form id="email-form"
            name="email-form"
            data-name="Email Form"
            data-redirect="/today-blank"
            className="option-group">
            <div className="w-clearfix checkbox-field radio">
              <div className="w-radio w-clearfix checkbox-click-div radio">
                <input id="radio"
                  type="radio"
                  name="radio"
                  value="Radio"
                  data-name="Radio"
                  className="w-radio-input checkbox-tick radio" />
                <label className="w-form-label checkbox-text radio" htmlFor="radio">
                  I drive to work
                </label>
              </div>
              <div className="text-field radio">
                I drive to work
              </div>
            </div>
            <div className="select-passenger-div">
              <h4>How many other people can you typically fit in your car?</h4>
              <div className="passenger-number">
                <img width="40" src="images/minus.png" className="minus" />
                <div className="number">
                  3
                </div><img width="40" src="images/plus.png" />
              </div>
            </div>
            <div className="w-clearfix checkbox-field radio">
              <div className="w-radio w-clearfix checkbox-click-div radio">
                <input id="radio"
                  type="radio"
                  name="radio-2"
                  value="Radio"
                  data-name="Radio 2"
                  className="w-radio-input checkbox-tick radio" />
                <label className="w-form-label checkbox-text radio" htmlFor="radio">
                  I drive to work
                </label>
              </div>
              <div className="text-field radio">
                I don't drive to work
              </div>
            </div>
            <input type="submit"
              value="I'm hungry"
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
