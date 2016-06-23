import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'param-store';

export default class Welcome extends React.Component {
  firstName() {
    if (!Meteor.user().profile.firstName) return '';

    return Meteor.user().profile.firstName;
  }

  render() {
    return (
      <div>
        <div className="giphy-div welcome">
          <div className="centered-div absolute">
            <div className="welcome-image">
            </div>
          </div>
        </div>
        <div className="w-section main-content-centered">
          <h1>
            Hope you’re hungry, {this.firstName()}!
            Let’s set your lunch preferences.
          </h1>
        </div>
        <Link
          href="onboarding-places.html"
          className="w-button button-hollow"
          params={{ path: 'onboarding-places' }}
        >
          I was born ready
        </Link>
      </div>
    );
  }
}

