import { Meteor } from 'meteor/meteor';
import Places from './collection';

Meteor.publish('places', () => {
  return Places.find();
});
