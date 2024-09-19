import { getDistance } from '../services/googleMapsService.js';

export const getDistanceController = async (origin, destination) => {
  console.log('Hello');
  const distanceInKm = await getDistance(origin, destination);
  const cost = distanceInKm * 0.4 * 2;
  return {
    cost: +cost.toFixed(2),
    distance: distanceInKm,
  };
};
