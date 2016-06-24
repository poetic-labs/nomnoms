import { Meteor } from 'meteor/meteor';
import Plans from './collection';

Meteor.publish('plans', () => Plans.find());
