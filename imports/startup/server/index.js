import '../../collections/users/collection';
import '../../collections/users/collection-methods';
import '../../collections/users/publish';
import '../../collections/places/collection';
import '../../seeds/places';
import { Meteor } from 'meteor/meteor';

const { GOOGLE: googleSettings, SLACK: slackSettings } = Meteor.settings;

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  { $set: {
      clientId: googleSettings.CLIENT_ID,
      secret: googleSettings.CLIENT_SECRET,
    },
  },
);

ServiceConfiguration.configurations.upsert(
  { service: 'slack' },
  { $set: {
      clientId: slackSettings.CLIENT_ID,
      secret: slackSettings.CLIENT_SECRET,
    },
  },
);