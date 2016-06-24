import Users from './collection';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

Users.methods = {
  updateFromGoogleLogin: new ValidatedMethod({
    name: 'Users.methods.updateFromGoogleLogin',
    validate(user) {
      check(user, Object);
    },
    run(user) {
      if (Meteor.isClient) return false;

      const { email, given_name, family_name, picture } = user.services.google;

      Users.update(user._id, {
        $set: {
          hasSignedInWithGoogle: true,
          username: email,
          'profile.firstName': given_name,
          'profile.lastName': family_name,
          'profile.photo': picture,
        },
        $push: {
          emails: { address: email, verified: true },
        },
      });

      return Users.findOne(user._id);
    },
  }),

  updateFromSlackLogin: new ValidatedMethod({
    name: 'Users.methods.updateFromSlackLogin',
    validate(user) {
      check(user, Object);
    },
    run(user) {
      if (Meteor.isClient) return false;

      const { name, id: slackUserId, email, image_1024: picture } = user.slackData.user;
      const { id: slackTeamId } = user.slackData.team;

      const splitName = name.split(' ');
      const firstName = splitName.shift();
      const lastName = splitName.shift() || '';

      Users.update(user._id, {
        $set: {
          hasSignedInWithSlack: true,
          username: email,
          'profile.firstName': firstName,
          'profile.lastName': lastName,
          'profile.photo': picture,
          'profile.social': {
            slack: {
              teamId: slackTeamId,
              userId: slackUserId,
            },
          },
        },
        $push: {
          emails: { address: email, verified: true },
        },
      });

      return Users.findOne(user._id);
    },
  }),
};
