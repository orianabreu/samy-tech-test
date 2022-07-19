import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';

export default function Main() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isApiSuscribed = true;
    setError(null);

    axios
      .get('http://localhost:3100/images')
      .then((response) => {
        if (isApiSuscribed) {
            setImages(response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
            setError(error.message);
        }
      });
    return () => {
        isApiSuscribed = false;
    };
  }, []);

  return (
    <Container>
      {error && <p className="error-message">{error}. Please try again later</p>}
      <div className="grid">
        {images.map((image) => {
          return (
            <Card
              key={image.id}
              price={image.price}
              image={image.main_attachment.small}
              title={image.title}
              author={image.author}
              likesCount={image.likes_count}
            />
          );
        })}
      </div>
    </Container>
  );
}
