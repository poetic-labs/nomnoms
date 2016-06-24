import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
  location: {
    type: Object,
  },
  'location.displayName': {
    type: String,
    optional: true,
  },
  'location.city': {
    type: String,
    optional: true,
  },
  'location.address': {
    type: String,
    optional: true,
  },
  'location.stateCode': {
    type: String,
    optional: true,
  },
  'location.postalCode': {
    type: String,
    optional: true,
  },
  'location.countryCode': {
    type: String,
    optional: true,
  },
  'location.crossStreets': {
    type: String,
    optional: true,
  },
  'location.neighborhoods': {
    type: [String],
    optional: true,
  },
  'location.coordinate': {
    type: Object,
    optional: true,
  },
  'location.coordinate.latitude': {
    type: String,
    optional: true,
  },
  'location.coordinate.longitude': {
    type: String,
    optional: true,
  },
  menuUrl: {
    type: String,
    optional: true,
  },
  name: {
    type: String,
  },
  photo: {
    type: String,
    optional: true,
  },
  url: {
    type: String,
    optional: true,
  },
  yelpUrl: {
    type: String,
    optional: true,
  },
});
