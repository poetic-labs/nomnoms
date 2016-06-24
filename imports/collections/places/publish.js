import { Meteor } from 'meteor/meteor';
import Places from './collection';

Meteor.publish('places', () => {
  console.log('PUBLISH');
  return Places.find();
});
