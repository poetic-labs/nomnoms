import React from 'react';

export default class EmailSignup extends React.Component {
  render() {
    return (
      <div>
        <div className="giphy-div welcome" />
        <div className="centered-div">
          <h1>Sign up with email</h1>
        </div>
        <div className="w-form email-signup">
          <form id="email-form" name="email-form" data-name="Email Form">
            <label className="label" htmlFor="Email-2">
              Email
            </label>
            <input id="Email-2"
              type="email"
              placeholder="Email"
              name="Email"
              data-name="Email"
              required="required"
              className="w-input text-field" />
            <label className="label" htmlFor="Password">
              Password
            </label>
            <input id="Password"
              type="password"
              placeholder="Password"
              name="Password"
              data-name="Password"
              required="required"
              className="w-input text-field" />
            <input type="submit"
              value="Sign up"
              data-wait="Please wait..."
              className="w-button button-hollow" />
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
