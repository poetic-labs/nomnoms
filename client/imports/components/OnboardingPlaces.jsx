import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PlacesCheckbox from './PlacesCheckbox';
import Places from '../../../imports/collections/places/collection';

export default class OnboardingPlaces extends React.Component {
  render() {
    const { places } = this.props;

    return (
      <div>
        <div className="w-section title-section">
          <h1 className="centered">Where are your go-to lunch places?</h1>
        </div>
        <div className="giphy-div">
          <img src="images/giphy (8).gif" />
        </div>
        <div className="w-form option-group">
          <form id="email-form"
            name="email-form"
            data-name="Email Form"
            data-redirect="/onboarding-car"
          >
            {
              places.map(place => (
                <PlacesCheckbox
                  key={place._id}
                  name={place.name}
                  placeId={place._id}
                />
                ))
            }
            <input type="submit"
              value="Next"
              data-wait="Please wait..."
              className="w-button button-hollow fixed"
            />
          </form>
          <div className="w-form-done">
            <p>
              Thank you! Your submission has been received!
            </p>
          </div>
          <div className="w-form-fail">
            <p>
              Oops! Something went wrong while submitting the form
            </p>
          </div>
        </div>
      </div>
    );
  }
}

OnboardingPlaces.propTypes = {
  places: React.PropTypes.array,
};

const OnboardingPlacesWithData = createContainer((props) => {
  const places = Places.find().fetch();

  return {
    places,
    ...props,
  };
}, OnboardingPlaces);

export default OnboardingPlacesWithData;
