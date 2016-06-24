export default function togglePlace(placeId) {
  return {
    type: 'ONBOARDING_PLACES_TOGGLE_PLACE',
    id: placeId,
  };
}
