import { Meteor } from 'meteor/meteor';
import Places from './collection';

Meteor.publish('places', () => Places.find());
