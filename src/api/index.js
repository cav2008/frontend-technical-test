// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehiclesData = await request('/api/vehicles.json');

  const vehiclesWithDetailsPromise = vehiclesData.map(async (vehicle) => {
    const normalizeData = (data) => {
      return {
        id: data.id ? data.id : '',
        description: data.description ? data.description : '',
        meta: data.meta ? data.meta : null,
        price: data.price ? data.price : '',
      };
    };

    try {
      const details = await request(vehicle.apiUrl);

      return { ...vehicle, details: normalizeData(details) };
    } catch (error) {
      return { ...vehicle, details: normalizeData({}) };
    }
  });

  const vehiclesWithDetails = await Promise.all(vehiclesWithDetailsPromise);

  return vehiclesWithDetails;
}
