import { getDistanceController } from '../../controllers/googleMapsController.js';
export const getDistanceHandler = async (event) => {
  const { origin, destination } = JSON.parse(event.body);
  try {
    const result = await getDistanceController(origin, destination);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,

      body: JSON.stringify({ message: error }),
    };
  }
};
