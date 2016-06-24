import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'param-store';
import Users from '../../../imports/collections/users/collection';
import ParamStore from 'param-store';
import $ from 'jquery';

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

  handleSlackLogin() {    
    Meteor.loginWithSlack({ requestPermissions: ['identity.basic', 'identity.avatar', 'identity.email', 'identity.team'] }, (err) => {
      if (err) {
        throw new Meteor.Error(
          'failed-slack-login',
          'Unable to login with Slack.'
        );
      }

      let user = Meteor.user();

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

          user.slackData = slackData;

          Users.methods.updateFromSlackLogin.call(user, error => {
            if (error) {
              throw new Meteor.Error(
                'failed-user-update',
                'Unable to update your profile information from Slack.'
              );
            }
          });
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
        <Link
          href="#"
          className="w-button button-hollow slack"
          onClick={() => this.handleSlackLogin()}
        >
          Sign in with Slack
        </Link>
      </div>
    );
  }
}

export default Index;
