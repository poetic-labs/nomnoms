import { Meteor } from 'meteor/meteor';
import Places from '../../collections/places/collection';
import placesConstants from '../../constants/places';
import _ from 'lodash';

export default class PlacesHelper {
  constructor() {
    const Yelp = require('yelp');
    const { YELP: yelpSettings } = Meteor.settings;

    this.houstonZipcodes = placesConstants.VALID_HOUSTON_ZIP_CODES;
    this.yelp = new Yelp({
      consumer_key: yelpSettings.CONSUMER_KEY,
      consumer_secret: yelpSettings.CONSUMER_SECRET,
      token: yelpSettings.TOKEN,
      token_secret: yelpSettings.TOKEN_SECRET,
    });
    this.places = [];
    this.placesIds = [];
  }

  seedDatabase() {
    this.placesData();
  }

  insertPlacesIntoDatabase() {
    _.each(this.places, place => {
      const placeId = Places.insert(place);

      this.placesIds.push(placeId);
    });
  }

  buildYelpPlaces(yelpPlaces) {
    if (!yelpPlaces.businesses) return [];

    _.each(yelpPlaces.businesses, place => {
      const cleanPlace = {
        location: {
          address: place.location.address.join(' '),
          city: place.location.city,
          coordinate: {
            longitude: place.location.coordinate.longitude,
            latitude: place.location.coordinate.latitude,
          },
          countryCode: place.location.country_code,
          crossStreets: place.location.cross_streets,
          displayName: place.location.display_address.join(' '),
          neighborhoods: place.location.neighborhoods,
          postalCode: place.location.postal_code,
          stateCode: place.location.state_code,
        },
        name: place.name,
        photo: place.image_url,
        yelpUrl: place.url,
      };

      this.places.push(cleanPlace);
    });

    this.insertPlacesIntoDatabase();
  }

  placesData() {
    this.yelp.search({ limit: 20, term: 'food', location: 77057 })
    .then(data => this.buildYelpPlaces(data))
    .catch(err => {
      console.log('err: ', err);
      return [];
    });
  }
}
