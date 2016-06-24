import PlacesHelper from '../modules/places-helper/index';
import Places from '../collections/places/collection';

if (Places.find().count() === 0) {
  const Helper = new PlacesHelper();
  Helper.seedDatabase();
}
