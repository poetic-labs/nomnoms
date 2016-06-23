import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
  address: {
    type: String,
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
