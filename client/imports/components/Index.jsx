/* eslint-disable */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ParamStore, { Link } from 'param-store';
import Users from '../../../imports/collections/users/collection';
import $ from 'jquery';

class Index extends React.Component {
  handleGoogleLogin() {
   throw new Meteor.Error(
        'failed-google-login',
        'Google login is disabled.'
    );

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
          } else {
            ParamStore.setAll({ path: 'welcome' });
          }
        });
      }
    });
  }

  handleSlackLogin() {   
    Meteor.loginWithSlack({ requestPermissions: ['identity.basic', 'identity.avatar', 'identity.email', 'identity.team'] }, (err) => {
      if (err) {
        throw new Meteor.Error(
          'failed-slack-login',
          'Unable to login with Slack.'
        );
      }

      const user = Meteor.user();

      if (user.profile.hasPreferencesSet) {
        console.log('ParamStore.setAll({ path: "plans" })');
      }

      if (!user.hasSignedInWithSlack) {
        const slackToken = user.services.slack.accessToken;
        const slackInfo = `https://slack.com/api/users.identity?token=${slackToken}`;

        $.getJSON(slackInfo, (slackData) => {
          if (slackData.error) {
            throw new Meteor.Error(
              'failed-slack-info-fetch',
              'Unable to login with Slack.'
            );
          } 

          Users.methods.updateFromSlackLogin.call({user, slackData}, error => {
            if (error) {
              throw new Meteor.Error(
                'failed-user-update',
                'Unable to update your profile information from Slack.'
              );
            } else {
              ParamStore.setAll({ path: 'welcome' });
            }
          });
        });    
      } else {
          ParamStore.setAll({ path: 'welcome' });
      }
    });   
  }

  render() {
    return (
      <div>
        <div className="splash-bg" />
        <div className="w-section sign-in-section">
          <div className="logo">
            <img src="images/logo.png" width="326" />
          </div>
        </div>
        <div className="connect-div">
          <Link
            href="#"
            className="w-button button google"
            onClick={() => this.handleGoogleLogin()}
          >
            Sign in with Google
          </Link>
          <Link
            href="#"
            className="w-button button slack"
            onClick={() => this.handleSlackLogin()}
          >
            Sign in with Slack
          </Link>
          <Link href="email-signup.html" className="w-button button email" params={{  path: 'email-signup'}}> Sign in with Email
          </Link>
        </div>
      </div>
      );
  }
}
;

export default Index;
