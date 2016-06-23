import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const userSocialSchema = new SimpleSchema({
  venmo: {
    type: Object,
    optional: true,
  },
  'venmo.username': {
    type: String,
    optional: true,
  },
  slack: {
    type: Object,
    optional: true,
  },
  'slack.teamId': {
    type: String,
    optional: true,
  },
  'slack.userId': {
    type: String,
    optional: true,
  },
});

const userProfileSchema = new SimpleSchema({
  availableSeats: {
    type: Number,
  },
  canDrive: {
    type: Boolean,
  },
  firstName: {
    type: String,
  },
  hasPreferenceSet: {
    type: Boolean,
    defaultValue: false,
  },
  lastName: {
    type: String,
  },
  preferredTime: {
    type: Object,
  },
  'preferredTime.lunch': {
    type: Date,
    optional: true,
  },
  'preferredTimes.lunch.start': {
    type: Date,
    optional: true,
  },
  'preferredTimes.lunch.end': {
    type: Date,
    optional: true,
  },
  social: {
    type: userSocialSchema,
    optional: true,
  },
});

export default new SimpleSchema({
  username: {
    type: String,
    optional: true,
  },
  emails: {
    type: Array,
    optional: true,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  registered_emails: {
    type: [Object],
    optional: true,
    blackbox: true,
  },
  profile: {
    type: userProfileSchema,
    optional: true,
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true,
  },
});
