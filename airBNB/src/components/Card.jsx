import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, img, image, number1, number2, town, title, cost }) {
  const [cardData, setCardData] = useState({
    img: img || '',
    image: image || '',
    number1: number1 || '',
    number2: number2 || '',
    town: town || '',
    title: title || '',
    cost: cost || '',
  });

  return (
    <div className="card">
      <Link to={`/details/${id}`}>
        <img className="card--photo" src={cardData.img} alt="Card" />
      </Link>
      <div className="card--stats">
        <img className="stats--photo" src={cardData.image} alt="Stats" />
        <span>{cardData.number1}</span>
        <span>{cardData.number2}</span>
        <span>{cardData.town}</span>
      </div>
      <p>{cardData.title}</p>
      <p>{cardData.cost}</p>
    </div>
  );
}
