import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailsPage() {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    // Fetch additional details for the card with the specified ID
    axios.get(`https://613c7e69e9d92a0017e1736f.mockapi.io/cards/${id}`)
      .then((response) => {
        setCardDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching card details:', error);
      });
  }, [id]);

  if (!cardDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Details for Card ID: {id}</h2>
      <img src={cardDetails.img} alt="Card" />
      <div>
        <p>{cardDetails.title}</p>
        <p>{cardDetails.cost}</p>
      </div>
    </div>
  );
}
