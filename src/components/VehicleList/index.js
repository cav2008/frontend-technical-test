import React from 'react';
import useData from './useData';
import Vehicle from '../Vehicle';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results">
      <div>
        {vehicles.map((vehicle) => {
          return (
            <Vehicle
              key={vehicle.id}
              media={vehicle.media}
              name={vehicle.id}
              price={vehicle.details.price}
              description={vehicle.details.description}
            />
          );
        })}
      </div>
    </div>
  );
}
