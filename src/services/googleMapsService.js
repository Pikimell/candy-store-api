import axios from 'axios';
import { GOOGLE_KEY } from '../helpers/constants.js';

export const getDistance = async (origin, destination) => {
  const apiKey = GOOGLE_KEY;
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`,
  );
  const distanceInMeters = response.data.rows[0].elements[0].distance.value;
  return distanceInMeters / 1000;
};
