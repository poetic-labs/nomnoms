import { Meteor } from 'meteor/meteor';
import Users from './collection';

Meteor.publish(null, () => Users.find());
