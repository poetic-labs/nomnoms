import PlacesSchema from '../../schemas/places.js';

const Places = new Mongo.Collection('Places');
Places.attachSchema(PlacesSchema);

export default Places;
