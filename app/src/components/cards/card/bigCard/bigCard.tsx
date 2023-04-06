import { Character } from 'base/types';
import React from 'react';

function BigCard(props: { char: Character | null }) {
  if (props.char) {
    const {
      image,
      name,
      species,
      status,
      type,
      gender,
      origin: { name: origin },
      location: { name: location },
    } = props.char;
    return (
      <div className="big-card">
        <img className="big-card__img" src={image} alt="Card image"></img>
        <div className="big-card__info">
          <p className="big-card__title">{name}</p>
          <p className="big-card__status">{status}</p>
          <p className="big-card__species">Species: {species}</p>
          <p className="big-card__type">Type: {type || 'Regular'}</p>
          <p className="big-card__gender">Gender: {gender}</p>
          <p className="big-card__origin">Origin: {origin}</p>
          <p className="big-card__location">Location: {location}</p>
        </div>
      </div>
    );
  } else {
    return <div className="big-card"></div>;
  }
}

export default BigCard;
