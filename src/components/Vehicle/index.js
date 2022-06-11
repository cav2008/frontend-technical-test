import React from 'react';

const Vehicle = ({
  media, name, price, description
}) => {
  return (
    <div>
      {media && <img src={media[1].url} alt="name" />}
      <div>
        <h2>{name}</h2>
        <p>
          {`From: ${price}`}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Vehicle;
