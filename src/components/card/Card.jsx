// Card Component:
import React from 'react';
import './Card.css';

const urlParm = '?set=set5&size=180x180';

export const Card = (props) => (
  <div className="card">
    <img
      src={`https://robohash.org/${props.person.id}${urlParm}`}
      alt="people"
    />
    <h2>{props.person.name.toUpperCase()}</h2>
    <p>{props.person.email.toLowerCase()}</p>
  </div>
);
