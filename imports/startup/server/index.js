import '../../collections/users/collection';
import '../../collections/users/collection-methods';
import '../../collections/users/publish';
import '../../collections/places/collection';
import '../../collections/places/publish';
import '../../seeds/places';
import { Meteor } from 'meteor/meteor';

const { GOOGLE: googleSettings } = Meteor.settings;

console.log('Startup');

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  { $set: {
      clientId: googleSettings.CLIENT_ID,
      secret: googleSettings.CLIENT_SECRET,
    },
  },
);
