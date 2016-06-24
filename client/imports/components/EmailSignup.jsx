/* eslint-disable */
import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class EmailSignup extends React.Component {
  render() {
    return (
      <div>
        <div className="giphy-div welcome" />
        <div className="centered-div">
          <h1>Connect with email</h1>
        </div>
        <div id="email-signup-form" className="w-form email-signup">
          <form data-name="Email Form"
            id="email-form"
            name="email-form"
            onSubmit={this.props['action.emailSignup.submitEmailForm']}>
            <label className="label" htmlFor="Email-2">
              Email
            </label>
            <input data-name="Email"
              id="Email-2"
              maxlength="256"
              name="Email"
              placeholder="Email"
              required="required"
              type="email"
              className="w-input text-field"
              value={this.props['state.emailSignup.email2']}
              onChange={this.props['action.emailSignup.changeEmail2']} />
            <label className="label" htmlFor="Password">
              Password
            </label>
            <input data-name="Password"
              id="Password"
              maxlength="256"
              name="Password"
              placeholder="Password"
              required="required"
              type="password"
              className="w-input text-field"
              value={this.props['state.emailSignup.password']}
              onChange={this.props['action.emailSignup.changePassword']} />
            <input data-wait="Please wait..."
              type="submit"
              value="Sign up"
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
const EmailSignupWithRedux = reduxConnect(
  (state) => ({
    'state.emailSignup.email2': state.emailSignup.email2,
    'state.emailSignup.password': state.emailSignup.password
  }),
  {
    'action.emailSignup.submitEmailForm': action.emailSignup.submitEmailForm,
    'action.emailSignup.changeEmail2': action.emailSignup.changeEmail2,
    'action.emailSignup.changePassword': action.emailSignup.changePassword
  }
)(EmailSignup);

export default EmailSignupWithRedux;
