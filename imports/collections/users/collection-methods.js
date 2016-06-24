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

  insertGotoPlaces: new ValidatedMethod({
    name: 'Users.insertGotoPlaces',
    validate(args) {
      check(args, {
        userId: String,
        gotoPlaces: Array,
      });
    },
    run({ userId, gotoPlaces }) {
      if (Meteor.isClient) return false;

      Users.update(userId, {
        $set: {
          'profile.gotoPlaces': gotoPlaces,
        },
      });

      return Users.findOne(userId);
    },
  }),
};
