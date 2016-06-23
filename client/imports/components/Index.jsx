import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'param-store';
import Users from '../../../imports/collections/users/collection';
import ParamStore from 'param-store';

class Index extends React.Component {
  handleGoogleLogin() {
    Meteor.loginWithGoogle({}, (err) => {
      if (err) {
        throw new Meteor.Error(
          'failed-google-login',
          'Unable to login with Google.'
        );
      }

      const user = Meteor.user();

      if (user.profile.hasPreferencesSet) {
        console.log('ParamStore.setAll({ path: "plans" })');
      }

      if (!user.hasSignedInWithGoogle) {
        Users.methods.updateFromGoogleLogin.call(user, error => {
          if (error) {
            throw new Meteor.Error(
              'failed-user-update',
              'Unable to update your profile information from Google.'
            );
          }
        });
      }

      ParamStore.setAll({ path: 'welcome' });
    });
  }

  render() {
    return (
      <div>
        <div className="w-section sign-in-section">
          <div className="logo">
            <img src="images/logo.png" />
          </div>
        </div>
        <Link
          href="#"
          className="w-button button-hollow google"
          onClick={() => this.handleGoogleLogin()}
        >
          Sign in with Google
        </Link>
      </div>
    );
  }
}

export default Index;
