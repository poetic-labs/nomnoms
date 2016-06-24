/* eslint-disable */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'param-store';
import { createContainer } from 'meteor/react-meteor-data';

class Welcome extends React.Component {
  photo() {
    const { user } = this.props;

    if (!user.profile.photo) return null;

    return (
      <img width="120" src={user.profile.photo} />
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div className="giphy-div welcome">
          <div className="centered-div absolute">
            <div className="welcome-image">
              {this.photo()}
            </div>
          </div>
        </div>
        <div className="w-section main-content-centered">
          <h1>
            Hope you’re hungry, {user.profile.firstName}!
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

Welcome.propTypes = {
  user: React.PropTypes.object,
};

const WelcomeWithData = createContainer((props) => {
  const user = Meteor.user() || {};

  return {
    user,
    ...props,
  };
}, Welcome);

export default WelcomeWithData;
