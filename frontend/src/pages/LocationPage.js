// src/pages/LocationPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const locationsData = {
  "paris": {
    name: "Paris",
    description: "Paris, the capital of France, is known for its cafes, art, and the Eiffel Tower.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg" // 실제 URL로 변경
  },
  "new-york": {
    name: "New York",
    description: "New York City, known for its skyline and the Statue of Liberty, is a bustling metropolis in the USA.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Statue_of_Liberty_7.jpg" // 실제 URL로 변경
  },
  "tokyo": {
    name: "Tokyo",
    description: "Tokyo, the capital of Japan, is famous for its modern architecture, shopping, and vibrant culture.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tokyo_Tower_and_Zojo-ji_Temple.jpg" // 실제 URL로 변경
  },
  "sydney": {
    name: "Sydney",
    description: "Sydney, located in Australia, is known for the Sydney Opera House and its stunning harbor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Sydney_Opera_House_and_Harbour_Bridge.jpg" // 실제 URL로 변경
  }
};


const LocationPage = () => {
  const { locationId } = useParams(); // URL에서 ID 추출
  const location = locationsData[locationId];

  if (!location) {
    return <h2>Location not found</h2>;
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <p>{location.description}</p>
      <img src={location.image} alt={location.name} style={{ width: '300px' }} />
    </div>
  );
};

export default LocationPage;
