import { Meteor } from 'meteor/meteor';
import Places from './collection';

Meteor.publish('places', () => {
  console.log('Here.');
  return Places.find();
});
