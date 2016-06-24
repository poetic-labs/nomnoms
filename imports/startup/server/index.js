import '../../collections/users/collection';
import '../../collections/users/collection-methods';
import '../../collections/users/publish';
import '../../collections/places/collection';
import '../../collections/places/publish';
import '../../collections/plans/collection';
import '../../collections/plans/publish';
import '../../collections/plans/collection-methods';
import '../../seeds/places';
import { Meteor } from 'meteor/meteor';

const { GOOGLE: googleSettings, SLACK: slackSettings } = Meteor.settings;

console.log('Startup');

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