// src/pages/LocationPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const locationsData = {
  "paris": {
    name: "Paris",
    description: "Paris, the capital of France, is known for its cafes, art, and the Eiffel Tower.",
    image: "https://example.com/paris.jpg" // 외부 이미지 URL 사용
  },
  "new-york": {
    name: "New York",
    description: "New York City, known for its skyline and the Statue of Liberty, is a bustling metropolis in the USA.",
    image: "https://example.com/new-york.jpg"
  },
  "tokyo": {
    name: "Tokyo",
    description: "Tokyo, the capital of Japan, is famous for its modern architecture, shopping, and vibrant culture.",
    image: "https://example.com/tokyo.jpg"
  },
  "sydney": {
    name: "Sydney",
    description: "Sydney, located in Australia, is known for the Sydney Opera House and its stunning harbor.",
    image: "https://example.com/sydney.jpg"
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
